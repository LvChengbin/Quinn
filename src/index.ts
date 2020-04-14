/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/index.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 04/11/2020
 * Description: 
 ******************************************************************/

export default class Quinn {

    private state: string = '';
    private resolvers: Function[] = [];
    private rejecters: Function[] = [];

    constructor( executor ) {

        const promise = new Promise( ( resolve, reject ) => {
            resolve.$ = ( state: String ): Function => {
                return ( ...args: any[] ) => {
                    this.state = x;
                    resolve( ...args );
                }
            }

            rejecters?.forEach( x => {
                reject[ x ] = ( ...args: any[] ) => {
                    this.state = x;
                    reject( ...args );
                }
            } );

            return executor( resolve, reject );
        } );

        promise.then( ( ...args: any[] ) => {
        } );

        promise.catch( ( ...args: any[] ) => {
        } );

        return promise;
    }

    then() {
    }

    catch() {
    }

    finally() {
    }

    static resolveAs() {
    }

    static rejectAs() {
    }

    static allAs() {
    }

    static raceAs() {
    }

    static resolve() {
        return Promise.resolve( ...arguments );
    }

    static reject() {
        return Promise.reject( ...arguments );
    }

    static all() {
        return Promise.all( ...arguments );
    }

    static allSettled() {
        return Promise.allSettled( ...arguments );
    }

    static any() {
        return Promise.any( ...arguments );
    }

    static race() {
        return Promise.ract( ...arguments );
    }
}

new Promise( ( resolve, reject ) => {
    resolve();
    reject();
} )

new Quinn( ( resolve, reject ) => {

}, [], [ 'timeout', 'unauthorized' ] );
