declare module "portfolio" {
  interface hookLogic {
    switchLogic?: boolean;
    setSwitchLogic?: Dispatch<SetStateAction<boolean>>;
    view?: boolean;
    firstView?: boolean;
    secondView?: boolean;
    setView?: Dispatch<SetStateAction<boolean>>;
    setFirstView?: Dispatch<SetStateAction<boolean>>;
    setSecondView?: Dispatch<SetStateAction<boolean>>;
    setCallLogic?: Dispatch<SetStateAction<boolean>>;
    setGlobalLogic?: Dispatch<SetStateAction<boolean>>;
    globalLogic?: boolean;
  }
}
