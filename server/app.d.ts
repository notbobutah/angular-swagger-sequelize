
declare module App {

    interface IModelBase {
        createdAt?: Date;
        updatedAt?: Date;
    }

    interface Icard extends IModelBase {
        idcard?: number;
        firstName?: string;
        lastName?: string;
        favoritecardPhrase?: string;
        reputation?: number;
    }

}


declare module 'app' {

    module e {
        
    }

    export = e;
}