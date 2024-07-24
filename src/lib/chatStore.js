import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";
import { useUserStore } from "./useUserStore";



 export const useChatStore = create((set) => ({
     chatId: null,
     user:null,
     isCurrentUserBlocke: false,
     isReceiverBlocked: false,
     changeChat: (chatId, user) => {
         const currentUser = useUserStore.getState().currentUser;

         
        
    }
  

 }))


