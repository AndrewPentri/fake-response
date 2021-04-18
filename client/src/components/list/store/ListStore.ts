import { makeAutoObservable, runInAction } from "mobx"
import { IListRecord } from "../type";

import Request from "../../../Request";
import Urls from "../../../common/Urls";
import { AxiosResponse } from "axios";

type AllRequests = {
    data?: IListRecord[],
    responseCode: number
}

class ListStore {
    records: IListRecord[] = [];
    isLoading: boolean = false;
    autoRefreshTime: number = 5000;
    timerId: number = -1;

    constructor() {
        const me = this;

        makeAutoObservable( me );

        me.loadRecords();
    }

    /**
    * Переодическая загрузка записей о запросах
    * со временем @autoRefreshTime
    * */
    loadRecords() {
        const me = this;
        me.isLoading = true;

        !( me.timerId < 0 ) && clearInterval( me.timerId );

        Request({
            url: Urls.getAllRequests,
            method: 'get'
        }).then( ( response: AxiosResponse ) => {
            if ( response && response.data ) {
                const responseData: AllRequests = response.data;
                runInAction( () => {
                    me.isLoading = false;
                    me.records = responseData.data || [];

                    me.timerId = window.setInterval(
                        me.loadRecords,
                        me.autoRefreshTime
                    )
                })
            }
        })
    }

    /**
    * Метод добавляет новый ответ в хранилище
    * @param record - запись об ответе
    * */
    addRecord( record: IListRecord ) {
        const me = this;

    }
}

export default new ListStore();