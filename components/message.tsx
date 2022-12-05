import { ApiPromise } from "@polkadot/api";
import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import React, { useEffect, useState } from "react";

import BottomNavigation from "../components/bottomNavigation";
import MessageMember from "../components/message_member";
import MessageRoom from "../components/messageRoom";
import TopBar from "../components/topBar";
import { connectToContract } from "../hooks/connect";
import { balenceOf } from "../hooks/FT";
import { getLastMessage, getMessageList } from "../hooks/messageFunction";
import {
  checkCreatedInfo,
  createProfile,
  getProfileForMessage,
  getSimpleProfileForMessage,
} from "../hooks/profileFunction";
import type { ProfileType } from "../hooks/profileFunction";

export default function message() {
  // variable related to contract
  const [api, setApi] = useState<ApiPromise>();
  const [accountList, setAccountList] = useState<InjectedAccountWithMeta[]>([]);
  const [actingAccount, setActingAccount] = useState<InjectedAccountWithMeta>();

  const [imgUrl, setImgUrl] = useState("");
  const [isCreatedProfile, setIsCreatedProfile] = useState(true);
  const [isCreatedFnRun, setIsCreatedFnRun] = useState(false);
  const [friendList, setFriendList] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [userImgUrl, setUserImgUrl] = useState("");
  const [myImgUrl, setMyImgUrl] = useState("");
  const [messageListId, setMessageListId] = useState<string>("");
  const [messageMemberList, setMessageMemberList] = useState([]);
  const [myUserId, setMyUserId] = useState("");
  const [isSetup, setIsSetup] = useState(false);
  const [profile, setProfile] = useState<ProfileType>();
  const [balance, setBalance] = useState<string>("0");

  useEffect(() => {
    //connect to contract
    connectToContract({
      api: api,
      accountList: accountList,
      actingAccount: actingAccount!,
      isSetup: isSetup,
      setApi: setApi,
      setAccountList: setAccountList,
      setActingAccount: setActingAccount!,
      setIsSetup: setIsSetup,
    });
    if (!isSetup) return;

    // get profile
    getProfileForMessage({
      api: api,
      userId: actingAccount?.address,
      setImgUrl: setImgUrl,
      setMyImgUrl: setMyImgUrl,
      setFriendList: setFriendList,
      setProfile: setProfile,
    });
    // create message member list UI
    createMessageMemberList();

    balenceOf({
      api: api,
      actingAccount: actingAccount!,
      setBalance: setBalance,
    });

    // check if already created profile in frontend
    if (isCreatedFnRun) return;

    // check if already created profile in contract
    checkCreatedInfo({
      api: api,
      userId: actingAccount?.address,
      setIsCreatedProfile: setIsCreatedProfile,
    });
    if (isCreatedProfile) return;
    // create profile
    createProfile({ api: api, actingAccount: actingAccount! });
    setIsCreatedFnRun(true);
  });

  // create message member list UI
  const createMessageMemberList = async () => {
    let memberList: Array<any> = new Array();
    for (var i = 0; i < friendList.length; i++) {
      let friendProfile = await getSimpleProfileForMessage({
        api: api,
        userId: friendList[i],
      });
      let idList = profile?.messageListIdList;
      let lastMessage: string;
      let messageList = await getMessageList({
        api: api,
        id: idList![i],
      });
      if (idList !== null) {
        lastMessage = await getLastMessage({ api: api, id: idList![i] });
      }
      let memberListFactor = (
        <MessageMember
          name={friendProfile?.name}
          img_url={friendProfile?.imgUrl}
          last_message={lastMessage}
          setShowMessageModal={setShowMessageModal}
          setUserName={setUserName}
          setUserImgUrl={setUserImgUrl}
          setMyImgUrl={setMyImgUrl}
          messageListId={idList[i]}
          setMessageListId={setMessageListId}
          setMessageList={setMessageList}
          messageList={messageList}
          getMessageList={getMessageList}
          setMyUserId={setMyUserId}
          myUserId={profile?.userId}
          api={api}
        />
      );
      memberList.push(memberListFactor);
    }
    setMessageMemberList(memberList);
  };

  return !showMessageModal ? (
    <div className="flex justify-center items-center bg-gray-200 w-screen h-screen relative">
      <main className="items-center h-screen w-1/3 flex bg-white flex-col">
        <TopBar
          idList={accountList}
          imgUrl={imgUrl}
          setActingAccount={setActingAccount}
          balance={balance}
        />
        <div className="flex-1 overflow-scroll w-full mt-1">
          {messageMemberList}
        </div>
        <div className="w-full">
          <BottomNavigation />
        </div>
      </main>
    </div>
  ) : (
    <MessageRoom
      setShowMessageModal={setShowMessageModal}
      userName={userName}
      userImgUrl={userImgUrl}
      myImgUrl={myImgUrl}
      myUserId={myUserId}
      api={api!}
      actingAccount={actingAccount!}
      messageListId={messageListId!}
      messageList={messageList!}
    />
  );
}


// import Image from "next/image";
// import React from "react";

// export default function Message(props: any) {
//   const is_me = props.senderId == props.account_id;
//   return is_me ? (
//     <div className="w-full justify-end items-end flex mt-3 mb-1">
//       <div className="flex-row items-end flex">
//         <div className="mr-1">{props.time}</div>
//         <div className={`mt-3`}>
//           <div className="flex-row flex items-center">
//             <div className="bg-blue-500 py-1 px-3 rounded max-w-[230px]">
//               <div>{props.message}</div>
//             </div>
//             {is_me ? (
//               <div className="border-t-transparent border-b-[10px] border-b-transparent border-l-[20px] border-l-blue-500"></div>
//             ) : null}
//           </div>
//         </div>
//         <div className="h-full flex-1 flex-col justify-start">
//           <Image
//             className="rounded-full h-10 w-10 mx-2 items-center"
//             src={props.img_url}
//             alt="profile_logo"
//             width={30}
//             height={30}
//             quality={100}
//           />
//         </div>
//       </div>
//     </div>
//   ) : (
//     <div className="w-full justify-start items-end flex mt-3 mb-1">
//       <div className="flex- flex items-center">
//         <Image
//           className="rounded-full h-10 w-10 mx-2 items-center"
//           src={props.img_url}
//           alt="profile_logo"
//           width={30}
//           height={30}
//           quality={100}
//         />
//         <div className="flex-row flex items-end justify-start">
//           <div className={`mt-3`}>
//             <div className="flex-row flex  items-center">
//               <div className="border-t-transparent border-b-[15px] border-b-transparent border-r-[20px] border-r-blue-500 "></div>
//               <div className="bg-blue-500 py-1 px-3 rounded max-w-[230px]">
//                 <div>{props.message}</div>
//               </div>
//             </div>
//           </div>
//           <div className="ml-1">{props.time}</div>
//         </div>
//       </div>
//     </div>
//   );
// }