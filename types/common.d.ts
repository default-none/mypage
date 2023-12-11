declare module "portfolio" {
  interface hookLogic {
    switchLogic?: boolean;
    setSwitchLogic?: Dispatch<SetStateAction<boolean>>;
    introView?: boolean;
    setIntroView?: Dispatch<SetStateAction <boolean>>;
    setCallLogic?: Dispatch<SetStateAction <boolean>>;
  }
}
