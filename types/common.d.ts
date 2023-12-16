declare module "typeList" {
  interface hookLogic {
    switchLogic?: boolean;
    view?: boolean;
    firstView?: boolean;
    secondView?: boolean;
    space?: number[];
    sectionRef?: Dispatch<HTMLElement>;

    setSwitchLogic?: Dispatch<SetStateAction<boolean>>;
    setView?: Dispatch<SetStateAction<boolean>>;
    setFirstView?: Dispatch<SetStateAction<boolean>>;
    setSecondView?: Dispatch<SetStateAction<boolean>>;
    setSpace?: Dispatch<SetStateAction<number[]>>;
  }
  type components = {
    text: string;
    view?: boolean;
  };
}
