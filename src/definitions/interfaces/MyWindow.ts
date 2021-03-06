export interface MyWindow
  extends Window {

    liff?: {
      // tslint:disable-next-line: no-any
      init: (data: any) => void;
      getProfile: () => {
        displayName: string,
        pictureUrl: string,
        statusMessage: string,
        userId: string
      };
      closeWindow: () => void;
      // tslint:disable-next-line: no-any
      sendMessages: (data: any) => Promise<any>;
    };
}

export interface LineInit {
  language: string;
  context: {
    viewType: string,
    userId: string,
    utouId: string,
    roomId: string,
    groupId: string
  };
}