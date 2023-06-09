import { createContext, useContext } from "react";
import ProjectStore from "./projectStore";
import UserStore from "./userStore";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import MemberStore from "./memberStore";

interface Store {
  projectStore: ProjectStore;
  userStore: UserStore;
  commonStore: CommonStore;
  modalStore: ModalStore;
  memberStore: MemberStore;
}

export const store: Store = {
  projectStore: new ProjectStore(),
  userStore: new UserStore(),
  commonStore: new CommonStore(),
  modalStore: new ModalStore(),
  memberStore: new MemberStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
