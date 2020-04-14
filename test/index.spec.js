/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: test/index.spec.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 04/11/2020
 * Description: 
 ******************************************************************/

import Quinn from '../src';

describe( 'Basic Promise features', () => {
    it( 'Promise.prototype.then', async () => {
        const fn = jest.fn();
        await new Quinn( resolve => resolve() ).then( fn );
        expect( fn ).toHaveBeenCalledTimes( 1 );
    } ); 

    it( 'Promise.prototype.catch', async () => {
        const fn = jest.fn();
        await new Quinn( ( resolve, reject ) => reject() ).catch( fn );
        expect( fn ).toHaveBeenCalledTimes( 1 );
    } );

    it( 'should have returned an instance of Promise', () => {
        expect( new Quinn( r => r() ) ).toBeInstanceOf( Promise );
    } );
} );

describe( 'Quinn Resolved', () => {

    it( 'the resolve function in executer should have specified revolve method', async () => {
        
        await new Quinn( resolve => {
            expect( resolve ).toHaveProperty( 'success' );
            resolve();
        }, [ 'success' ] );
    } );

    it( 'special resolve method should have been called', async () => {
        const fn = jest.fn();
        await new Quinn( resolve => resolve.success() ).then( {
            success() {
                fn();
            }
        } );
        expect( fn ).toHaveBeenCalledTimes( 1 );
    } );

} );

describe( 'Quinn Rejected', () => {

    it( 'the reject function in executer should have specified reject method', async () => {
        
        await new Quinn( ( resolve, reject ) => {
            expect( reject ).toHaveProperty( 'timeout' );
            resolve();
        }, [ 'success' ], [ 'timeout' ] );
    } );

} );
