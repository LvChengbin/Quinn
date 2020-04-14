/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: www/.eslintrc.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 03/20/2020
 * Description: 
 ******************************************************************/

module.exports = {
    parser : '@typescript-eslint/parser',
    plugins : [ '@typescript-eslint/eslint-plugin' ],
    extends : [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    globals : {
        process : true
    },
    settings : {
        ecmascript : 6,
        jsx : true,
        react : {
            version : 'detect'
        }
    },
    parserOptions : {
        sourceType : 'module',
        ecmaVersion : 2017
    },
    root : true,
    env : {
        browser : true,
        es6 : true,
        jest : true
    },
    rules : {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/adjacent-overload-signatures' : 'off',
        '@typescript-eslint/type-annotation-spacing' : 'off',
        '@typescript-eslint/triple-slash-reference' : 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-array-constructor' : 'off',
        '@typescript-eslint/no-inferrable-types' : 'off',
        '@typescript-eslint/class-name-casing' : 'off',
        '@typescript-eslint/no-empty-function' : 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/camelcase' : 'off',
        'prefer-rest-params' : 'off',
        'prefer-const' : 'off',
        'prefer-spread' : 'off',
        'no-console' : 'off',
        'linebreak-style': [ 'error', 'unix' ],
        quotes : [ 'error', 'single' ],
        semi : [ 0 ]
    }
}
