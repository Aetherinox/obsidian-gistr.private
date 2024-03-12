/*
*   @package:     gistr
*   @module:      obsidian.md
*   @author:      Aetherinox
*   @url:         https://github.com/Aetherinox/obsidian-gistr
*/

/*
*    import
*/

import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import define from 'rollup-plugin-define';
import license from 'rollup-plugin-license';
import { v5 as uuidv5 } from 'uuid';
import {readFileSync, writeFileSync} from 'fs';

/*
*    declrations
*/

const {
    name,
    author,
    version,
    repository
} = JSON.parse(readFileSync('./package.json'));

const bIsProd         = ( process.env.BUILD === 'production' );
const bIsDev          = ( process.env.BUILD === 'dev' );
const year            = new Date().getFullYear();
const build_id        = uuidv5( ` + repository + `, uuidv5.URL )

/*
*    write build id to file
*
*    export $(cat .env | xargs)
*/

writeFileSync( ".env", `UUID=${ build_id }`,
{
    flag: "w"
})

writeFileSync( ".build", `${ build_id }`,
{
    flag: "w"
})

/*
*    banner
*/

const header_banner = `
@name:        ${ name } v${ version }
@author:      ${ author }
@url:         ${ repository.url }
@copyright:   (c) ${ year } ${ author }
@license:     MIT
@build:       ${ new Date( ).toISOString( ) }
@build-id:    ${ build_id }
`;

/*
*    banner output
*/

console.log( header_banner );
console.log( `Running in ${ bIsDev ? 'development' : 'production' } mode` );

/*
dir: 'dist/',
dir: './',
*/

export default {
  input: 'src/main.ts',
  output: {
    dir: './',
    sourcemap: 'inline',
    sourcemapExcludeSources: bIsProd,
    format: 'cjs',
    exports: 'named'
  },
  external: ['obsidian'],
  plugins: [
    typescript(),
    nodeResolve({ browser: true }),
    commonjs(),

    define({
      replacements: {
        "process.env.NODE_ENV": bIsProd ? '"production"' : '"dev"',
        "process.env.ENV": bIsProd ? '"production"' : '"dev"',
        "process.env.BUILD": bIsProd ? '"production"' : '"dev"',
        "process.env.PLUGIN_VERSION": `"${version}"`,
        "process.env.BUILD_ID": `"${ build_id }"`,
        "process.env.BUILD_DATE": JSON.stringify(new Date()),
        "process.env.NAME": `"${name}"`,
        "process.env.AUTHOR": `"${author}"`,
      }
    }),
    terser({
      ecma: 2020,
      mangle: { toplevel: true },
      compress: {
        module: true,
        toplevel: true,
        unsafe_arrows: true
      },
      format: { comments: false }
    }),
    license({
      sourcemap: true,
      banner: {
        content:  `${ header_banner }`,
        commentStyle: 'regular',
      },
    }),
  ]
};