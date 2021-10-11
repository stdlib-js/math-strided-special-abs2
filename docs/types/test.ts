/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import abs2 = require( './index' );


// TESTS //

// The function returns an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	abs2( x.length, 'float64', x, 1, 'float64', y, 1 ); // $ExpectType ArrayLike<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	abs2( '10', 'float64', x, 1, 'float64', y, 1 ); // $ExpectError
	abs2( true, 'float64', x, 1, 'float64', y, 1 ); // $ExpectError
	abs2( false, 'float64', x, 1, 'float64', y, 1 ); // $ExpectError
	abs2( null, 'float64', x, 1, 'float64', y, 1 ); // $ExpectError
	abs2( undefined, 'float64', x, 1, 'float64', y, 1 ); // $ExpectError
	abs2( [], 'float64', x, 1, 'float64', y, 1 ); // $ExpectError
	abs2( {}, 'float64', x, 1, 'float64', y, 1 ); // $ExpectError
	abs2( ( x: number ): number => x, 'float64', x, 1, 'float64', y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	abs2( x.length, 10, x, 1, 'float64', y, 1 ); // $ExpectError
	abs2( x.length, true, x, 1, 'float64', y, 1 ); // $ExpectError
	abs2( x.length, false, x, 1, 'float64', y, 1 ); // $ExpectError
	abs2( x.length, null, x, 1, 'float64', y, 1 ); // $ExpectError
	abs2( x.length, undefined, x, 1, 'float64', y, 1 ); // $ExpectError
	abs2( x.length, [], x, 1, 'float64', y, 1 ); // $ExpectError
	abs2( x.length, {}, x, 1, 'float64', y, 1 ); // $ExpectError
	abs2( x.length, ( x: number ): number => x, x, 1, 'float64', y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	abs2( x.length, 'float64', 10, 1, 'float64', y, 1 ); // $ExpectError
	abs2( x.length, 'float64', '10', 1, 'float64', y, 1 ); // $ExpectError
	abs2( x.length, 'float64', true, 1, 'float64', y, 1 ); // $ExpectError
	abs2( x.length, 'float64', false, 1, 'float64', y, 1 ); // $ExpectError
	abs2( x.length, 'float64', null, 1, 'float64', y, 1 ); // $ExpectError
	abs2( x.length, 'float64', undefined, 1, 'float64', y, 1 ); // $ExpectError
	abs2( x.length, 'float64', [ '1' ], 1, 'float64', y, 1 ); // $ExpectError
	abs2( x.length, 'float64', {}, 1, 'float64', y, 1 ); // $ExpectError
	abs2( x.length, 'float64', ( x: number ): number => x, 1, 'float64', y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	abs2( x.length, 'float64', x, '10', 'float64', y, 1 ); // $ExpectError
	abs2( x.length, 'float64', x, true, 'float64', y, 1 ); // $ExpectError
	abs2( x.length, 'float64', x, false, 'float64', y, 1 ); // $ExpectError
	abs2( x.length, 'float64', x, null, 'float64', y, 1 ); // $ExpectError
	abs2( x.length, 'float64', x, undefined, 'float64', y, 1 ); // $ExpectError
	abs2( x.length, 'float64', x, [], 'float64', y, 1 ); // $ExpectError
	abs2( x.length, 'float64', x, {}, 'float64', y, 1 ); // $ExpectError
	abs2( x.length, 'float64', x, ( x: number ): number => x, 'float64', y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a string...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	abs2( x.length, 'float64', x, 1, 10, y, 1 ); // $ExpectError
	abs2( x.length, 'float64', x, 1, true, y, 1 ); // $ExpectError
	abs2( x.length, 'float64', x, 1, false, y, 1 ); // $ExpectError
	abs2( x.length, 'float64', x, 1, null, y, 1 ); // $ExpectError
	abs2( x.length, 'float64', x, 1, undefined, y, 1 ); // $ExpectError
	abs2( x.length, 'float64', x, 1, [], y, 1 ); // $ExpectError
	abs2( x.length, 'float64', x, 1, {}, y, 1 ); // $ExpectError
	abs2( x.length, 'float64', x, 1, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );

	abs2( x.length, 'float64', x, 1, 'float64', 10, 1 ); // $ExpectError
	abs2( x.length, 'float64', x, 1, 'float64', '10', 1 ); // $ExpectError
	abs2( x.length, 'float64', x, 1, 'float64', true, 1 ); // $ExpectError
	abs2( x.length, 'float64', x, 1, 'float64', false, 1 ); // $ExpectError
	abs2( x.length, 'float64', x, 1, 'float64', null, 1 ); // $ExpectError
	abs2( x.length, 'float64', x, 1, 'float64', undefined, 1 ); // $ExpectError
	abs2( x.length, 'float64', x, 1, 'float64', [ '1' ], 1 ); // $ExpectError
	abs2( x.length, 'float64', x, 1, 'float64', {}, 1 ); // $ExpectError
	abs2( x.length, 'float64', x, 1, 'float64', ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	abs2( x.length, 'float64', x, 1, 'float64', y, '10' ); // $ExpectError
	abs2( x.length, 'float64', x, 1, 'float64', y, true ); // $ExpectError
	abs2( x.length, 'float64', x, 1, 'float64', y, false ); // $ExpectError
	abs2( x.length, 'float64', x, 1, 'float64', y, null ); // $ExpectError
	abs2( x.length, 'float64', x, 1, 'float64', y, undefined ); // $ExpectError
	abs2( x.length, 'float64', x, 1, 'float64', y, [] ); // $ExpectError
	abs2( x.length, 'float64', x, 1, 'float64', y, {} ); // $ExpectError
	abs2( x.length, 'float64', x, 1, 'float64', y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	abs2(); // $ExpectError
	abs2( x.length ); // $ExpectError
	abs2( x.length, 'float64' ); // $ExpectError
	abs2( x.length, 'float64', x ); // $ExpectError
	abs2( x.length, 'float64', x, 1 ); // $ExpectError
	abs2( x.length, 'float64', x, 1, 'float64' ); // $ExpectError
	abs2( x.length, 'float64', x, 1, 'float64', y ); // $ExpectError
	abs2( x.length, 'float64', x, 1, 'float64', y, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 ); // $ExpectType ArrayLike<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	abs2.ndarray( '10', 'float64', x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( true, 'float64', x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( false, 'float64', x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( null, 'float64', x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( undefined, 'float64', x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( [], 'float64', x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( {}, 'float64', x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( ( x: number ): number => x, 'float64', x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a string...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	abs2.ndarray( x.length, 10, x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, true, x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, false, x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, null, x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, undefined, x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, [], x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, {}, x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, ( x: number ): number => x, x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	abs2.ndarray( x.length, 'float64', 10, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', '10', 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', true, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', false, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', null, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', undefined, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', [ '1' ], 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', {}, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', ( x: number ): number => x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	abs2.ndarray( x.length, 'float64', x, '10', 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, true, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, false, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, null, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, undefined, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, [], 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, {}, 0, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, ( x: number ): number => x, 0, 'float64', y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	abs2.ndarray( x.length, 'float64', x, 1, '10', 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, true, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, false, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, null, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, undefined, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, [], 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, {}, 'float64', y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, ( x: number ): number => x, 'float64', y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a string...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	abs2.ndarray( x.length, 'float64', x, 1, 0, 10, y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, true, y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, false, y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, null, y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, undefined, y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, [], y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, {}, y, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );

	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', 10, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', '10', 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', true, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', false, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', null, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', undefined, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', [ '1' ], 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', {}, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, '10', 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, true, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, false, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, null, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, undefined, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, [], 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, {}, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, '10' ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, true ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, false ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, null ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, undefined ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, [] ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, {} ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	abs2.ndarray(); // $ExpectError
	abs2.ndarray( x.length ); // $ExpectError
	abs2.ndarray( x.length, 'float64' ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64' ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', y ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1 ); // $ExpectError
	abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 10 ); // $ExpectError
}
