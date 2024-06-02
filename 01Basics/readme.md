<h3>"use strict" :</h3>
<p>Syntax: <code>"use strict";</code></p>
<p>Usage: It treats all js code as newer version coded</p>
<p>Newer broswer do no need to mention this they by default treat the js as newer version</p>

<h3>Types of declartion based on scope: </h3>
<p>
<ul>
    <li>let -> it declares the variable in the local scope</li>
    <li>const -> it also declares the variable in the local scopre</li>
    <li>var -> it declares the variable in the global scope</li>
    <ul>
        </p>

        <h3>Data types in Js</h3>
        <p>
        <ul>
            <li><code>Number</code> 2^53 is the range</li>
            <li><code>BigInt</code></li>
            <li><code>String</code> ==> ""</li>
            <li><code>Boolean</code> => true or false</li>
            <li><code>null</code> => standalon value --> means empty</li>
            <li><code>undefined</code> --> means value not assigned</li>
            <li><code>symbol</code> --> uniqueness</li>
        </ul>

        </p>
        <p>We can check the type of data using </p>
        <ul>
            <li><code>typeof <nameOfVariable></code></li>
            <li><code>typeof (<nameOfVariable>)</code></li>
        </ul>

        <h3>Types of datatypes in Js</h3>
        <h4>Primitive</h4>
        <p>
        <ul>
            <li>String</li>
            <li>Number</li>
            <li>Boolean</li>
            <li>null</li>
            <li>undefined</li>
            <li>Symbol</li>
            <li>BigInt</li>
        </ul>
        </p>
        <h4>Reference type/NonPrimitive</h4>
        <p>
        <ul>
            <li>Array</li>
            <li>Objects</li>
            <li>Function</li>
        </ul>
        </p>

        <h3>Type Conversions in Js</h3>
        <p>Example 1
            <code>
                <ul>
                    <li>let score = "33"</li>
                    <li> console.log(typeof score)</li>
                    <li>let valueInNumber = Number(score)</li>
 <li>console.log(valueInNumber)</li>    
                <li></ul></li>
            </code>
        </p>
        <p>Example 2
            <code>
                <ul>
                    <li>let isLoggedIN =  "dsf"</li>

                    <li>let  booleanLoggedIn = Boolean(isLoggedIN)</li>
                    <li>console.log(booleanLoggedIn)</li>    
                <li></ul></li>
            </code>
        </p>
        <p>Example 3
            <code>
                <ul>
                    <li>let some = 33</li>
<li>let stringval = String(some)</li>
<li>console.log(stringval)</li>
<li>console.log(typeof stringval)</li>   
                <li></ul></li>
            </code>
        </p>
        <p>Concatination of string 
            <code>
                let str1 = "akshat"
                let str2 = " kumar"
                let str3 = str1+str2
            </code>    
        </p>