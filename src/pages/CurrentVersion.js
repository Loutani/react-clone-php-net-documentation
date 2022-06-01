import currentVersionImage from "./../logo_php8_1.svg"
import phpPerformanceImage from "./../php81_performance.svg"

const CurrentVersion = () => {
    return (
        <>
            <div className="container"></div>
            <div className="layout clearfix">
  <section className="layout-content">
<section className="php8-section php8-section_dark php8-section_header center">
    <div className="page-tools">
        <div className="change-language">
            
      <form action="" method="get" id="changelang" name="changelang">
        <fieldset>
          <label htmlFor="changelang-langs">Change language:</label>
          <select name="lang" id="changelang-langs">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="de">Deutsch</option>
            <option value="pt_BR">Português do Brasil</option>
            <option value="ru">Русский</option>
            <option value="zh">简体中文</option>
            <option value="ka">ქართული</option>
            <option value="ja">日本語</option>
          </select>
        </fieldset>
      </form>
        </div>
    </div>
    <div className="php8-section__content">
        <div className="php8-logo">
            <img src={currentVersionImage} alt="php8.1" height="126" width="343" />
        </div>
        <div className="php8-title">Released!</div>
        <div className="php8-subtitle">PHP 8.1 is a major update of the PHP language.<br className="display-none-md" /> It contains many new features, including enums, readonly&nbsp;properties, first-class&nbsp;callable&nbsp;syntax, fibers, intersection&nbsp;types, performance improvements and more.</div>
        <div className="php8-button-wrapper center">
            <a className="php8-button php8-button_light" href="/downloads">Upgrade to PHP 8.1 now!</a>
        </div>
    </div>
</section>

<section className="php8-section center">
    <div className="php8-compare">
        <h2 className="php8-h2" id="enumerations">
            Enumerations            <a className="php8-rfc" href="https://wiki.php.net/rfc/enumerations">RFC</a> <a className="php8-rfc" href="/manual/en/language.enumerations.php">Doc</a>
       </h2>
        <div className="php8-compare__main">
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label">PHP &lt; 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default"></span><span className="keyword">class </span><span className="default">Status<br /></span><span className="keyword">{`{`}<br />&nbsp; &nbsp; const </span><span className="default">DRAFT </span><span className="keyword">= </span><span className="string">'draft'</span><span className="keyword">;<br />&nbsp; &nbsp; const </span><span className="default">PUBLISHED </span><span className="keyword">= </span><span className="string">'published'</span><span className="keyword">;<br />&nbsp; &nbsp; const </span><span className="default">ARCHIVED </span><span className="keyword">= </span><span className="string">'archived'</span><span className="keyword">;<br />{`}`}<br />function </span><span className="default">acceptStatus</span><span className="keyword">(</span><span className="default">string $status</span><span className="keyword">) {`{`}...{`}`}</span>
</span>
</code></div>                </div>
            </div>
            <div className="php8-compare__arrow"></div>
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default">enum Status<br /></span><span className="keyword">{`{`}<br />&nbsp; &nbsp; case </span><span className="default">Draft</span><span className="keyword">;<br />&nbsp; &nbsp; case </span><span className="default">Published</span><span className="keyword">;<br />&nbsp; &nbsp; case </span><span className="default">Archived</span><span className="keyword">;<br />{`}`}<br />function </span><span className="default">acceptStatus</span><span className="keyword">(</span><span className="default">Status $status</span><span className="keyword">) {`{`}...{`}`}</span>
</span>
</code></div>                </div>
            </div>
        </div>
        <div className="php8-compare__content">
            Use enum instead of a set of constants and get validation out of the box.        </div>
    </div>

    <div className="php8-compare">
        <h2 className="php8-h2" id="readonly_properties">
            Readonly Properties            <a className="php8-rfc" href="https://wiki.php.net/rfc/readonly_properties_v2">RFC</a> <a className="php8-rfc" href="/manual/en/language.oop5.properties.php#language.oop5.properties.readonly-properties">Doc</a>
        </h2>
        <div className="php8-compare__main">
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label">PHP &lt; 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default"></span><span className="keyword">class </span><span className="default">BlogData<br /></span><span className="keyword">{`{`}<br />&nbsp; &nbsp; private </span><span className="default">Status $status</span><span className="keyword">;<br />&nbsp;&nbsp; <br />&nbsp; &nbsp; public function </span><span className="default">__construct</span><span className="keyword">(</span><span className="default">Status $status</span><span className="keyword">) <br />&nbsp; &nbsp; {`{`}<br />&nbsp; &nbsp; &nbsp; &nbsp; </span><span className="default">$this</span><span className="keyword">-&gt;</span><span className="default">status </span><span className="keyword">= </span><span className="default">$status</span><span className="keyword">;<br />&nbsp; &nbsp; {`}`}<br />&nbsp; &nbsp; <br />&nbsp; &nbsp; public function </span><span className="default">getStatus</span><span className="keyword">(): </span><span className="default">Status <br />&nbsp; &nbsp; </span><span className="keyword">{`{`}<br />&nbsp; &nbsp; &nbsp; &nbsp; return </span><span className="default">$this</span><span className="keyword">-&gt;</span><span className="default">status</span><span className="keyword">;&nbsp; &nbsp; <br />&nbsp; &nbsp; {`}`}<br />{`}`}</span>
</span>
</code></div>                </div>
            </div>
            <div className="php8-compare__arrow"></div>
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default"></span><span className="keyword">class </span><span className="default">BlogData<br /></span><span className="keyword">{`{`}<br />&nbsp; &nbsp; public </span><span className="default">readonly Status $status</span><span className="keyword">;<br />&nbsp;&nbsp; <br />&nbsp; &nbsp; public function </span><span className="default">__construct</span><span className="keyword">(</span><span className="default">Status $status</span><span className="keyword">) <br />&nbsp; &nbsp; {`{`}<br />&nbsp; &nbsp; &nbsp; &nbsp; </span><span className="default">$this</span><span className="keyword">-&gt;</span><span className="default">status </span><span className="keyword">= </span><span className="default">$status</span><span className="keyword">;<br />&nbsp; &nbsp; {`}`}<br />{`}`}</span>
</span>
</code></div>                </div>
            </div>
        </div>
        <div className="php8-compare__content">
            <p>Readonly properties cannot be changed after initialization, i.e. after a value is assigned to them.<br />They are a great way to model value objects and data-transfer objects.</p>        </div>
    </div>

    <div className="php8-compare">
        <h2 className="php8-h2" id="first_class_callable_syntax">
            First-class Callable Syntax            <a className="php8-rfc" href="https://wiki.php.net/rfc/first_class_callable_syntax">RFC</a> <a className="php8-rfc" href="/manual/en/functions.first_class_callable_syntax.php">Doc</a>
        </h2>
        <div className="php8-compare__main">
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label">PHP &lt; 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default">$foo </span><span className="keyword">= [</span><span className="default">$this</span><span className="keyword">, </span><span className="string">'foo'</span><span className="keyword">];<br /><br /></span><span className="default">$fn </span><span className="keyword">= </span><span className="default">Closure</span><span className="keyword">::</span><span className="default">fromCallable</span><span className="keyword">(</span><span className="string">'strlen'</span><span className="keyword">);</span>
</span>
</code></div>                </div>
            </div>
            <div className="php8-compare__arrow"></div>
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default">$foo </span><span className="keyword">= </span><span className="default">$this</span><span className="keyword">-&gt;</span><span className="default">foo</span><span className="keyword">(...);<br /><br /></span><span className="default">$fn </span><span className="keyword">= </span><span className="default">strlen</span><span className="keyword">(...);</span>
</span>
</code></div>                </div>
            </div>
        </div>
        <div className="php8-compare__content">
            <p>It is now possible to get a reference to any function – this is called first-class callable syntax.</p>        </div>
    </div>

    <div className="php8-compare">
        <h2 className="php8-h2" id="new_in_initializers">
            New in initializers            <a className="php8-rfc" href="https://wiki.php.net/rfc/new_in_initializers">RFC</a>
        </h2>
        <div className="php8-compare__main">
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label">PHP &lt; 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default"></span><span className="keyword">class </span><span className="default">Service <br /></span><span className="keyword">{`{`}<br />&nbsp; &nbsp; private </span><span className="default">Logger $logger</span><span className="keyword">;<br /> <br />&nbsp; &nbsp; public function </span><span className="default">__construct</span><span className="keyword">(<br />&nbsp; &nbsp; &nbsp; &nbsp; ?</span><span className="default">Logger $logger </span><span className="keyword">= </span><span className="default">null</span><span className="keyword">,<br />&nbsp; &nbsp; ) {`{`}<br />&nbsp; &nbsp; &nbsp; &nbsp; </span><span className="default">$this</span><span className="keyword">-&gt;</span><span className="default">logger </span><span className="keyword">= </span><span className="default">$logger </span><span className="keyword">?? new </span><span className="default">NullLogger</span><span className="keyword">();<br />&nbsp; &nbsp; {`}`}<br />{`}`}</span>
</span>
</code></div>                </div>
            </div>
            <div className="php8-compare__arrow"></div>
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default"></span><span className="keyword">class </span><span className="default">Service <br /></span><span className="keyword">{`{`}<br />&nbsp; &nbsp; private </span><span className="default">Logger $logger</span><span className="keyword">;<br />&nbsp; &nbsp; <br />&nbsp; &nbsp; public function </span><span className="default">__construct</span><span className="keyword">(<br />&nbsp; &nbsp; &nbsp; &nbsp; </span><span className="default">Logger $logger </span><span className="keyword">= new </span><span className="default">NullLogger</span><span className="keyword">(),<br />&nbsp; &nbsp; ) {`{`}<br />&nbsp; &nbsp; &nbsp; &nbsp; </span><span className="default">$this</span><span className="keyword">-&gt;</span><span className="default">logger </span><span className="keyword">= </span><span className="default">$logger</span><span className="keyword">;<br />&nbsp; &nbsp; {`}`}<br />{`}`}</span>
</span>
</code></div>                </div>
            </div>
        </div>

        <div className="php8-compare__content php8-compare__content--spaced">
            <p>Objects can now be used as default parameter values, static variables, and global constants, as well as in attribute arguments.</p>
            <p>This effectively makes it possible to use <strong>nested attributes</strong>.</p>        </div>
        <div className="php8-compare__main">
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label">PHP &lt; 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default"></span><span className="keyword">class </span><span className="default">User <br /></span><span className="keyword">{`{`}<br />&nbsp; &nbsp; </span><span className="comment">/**<br />&nbsp; &nbsp;&nbsp; * @Assert\All({`{`}<br />&nbsp; &nbsp;&nbsp; *&nbsp; &nbsp;&nbsp; @Assert\NotNull,<br />&nbsp; &nbsp;&nbsp; *&nbsp; &nbsp;&nbsp; @Assert\Length(min=5)<br />&nbsp; &nbsp;&nbsp; * {`}`})<br />&nbsp; &nbsp;&nbsp; */<br />&nbsp; &nbsp; </span><span className="keyword">public </span><span className="default">string $name </span><span className="keyword">= </span><span className="string">''</span><span className="keyword">;<br />{`}`}</span>
</span>
</code></div>                </div>
            </div>
            <div className="php8-compare__arrow"></div>
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default"></span><span className="keyword">class </span><span className="default">User <br /></span><span className="keyword">{`{`}<br />&nbsp; &nbsp; </span><span className="comment">#[\Assert\All(<br />&nbsp; &nbsp; &nbsp; &nbsp; </span><span className="keyword">new \</span><span className="default">Assert</span><span className="keyword">\</span><span className="default">NotNull</span><span className="keyword">,<br />&nbsp; &nbsp; &nbsp; &nbsp; new \</span><span className="default">Assert</span><span className="keyword">\</span><span className="default">Length</span><span className="keyword">(</span><span className="default">min</span><span className="keyword">: </span><span className="default">5</span><span className="keyword">))<br />&nbsp; &nbsp; ]<br />&nbsp; &nbsp; public </span><span className="default">string $name </span><span className="keyword">= </span><span className="string">''</span><span className="keyword">;<br />{`}`}</span>
</span>
</code></div>                </div>
            </div>
        </div>
    </div>

    <div className="php8-compare">
        <h2 className="php8-h2" id="pure_intersection_types">
            Pure Intersection Types            <a className="php8-rfc" href="https://wiki.php.net/rfc/pure-intersection-types">RFC</a> <a className="php8-rfc" href="/manual/en/language.types.declarations.php#language.types.declarations.composite.intersection">Doc</a>
        </h2>
        <div className="php8-compare__main">
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label">PHP &lt; 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default"></span><span className="keyword">function </span><span className="default">count_and_iterate</span><span className="keyword">(</span><span className="default">Iterator $value</span><span className="keyword">) {`{`}<br />&nbsp; &nbsp; if (!(</span><span className="default">$value </span><span className="keyword">instanceof </span><span className="default">Countable</span><span className="keyword">)) {`{`}<br />&nbsp; &nbsp; &nbsp; &nbsp; throw new </span><span className="default">TypeError</span><span className="keyword">(</span><span className="string">'value must be Countable'</span><span className="keyword">);<br />&nbsp; &nbsp; {`}`}<br /><br />&nbsp; &nbsp; foreach (</span><span className="default">$value </span><span className="keyword">as </span><span className="default">$val</span><span className="keyword">) {`{`}<br />&nbsp; &nbsp; &nbsp; &nbsp; echo </span><span className="default">$val</span><span className="keyword">;<br />&nbsp; &nbsp; {`}`}<br /><br />&nbsp; &nbsp; </span><span className="default">count</span><span className="keyword">(</span><span className="default">$value</span><span className="keyword">);<br />{`}`}</span>
</span>
</code></div>                </div>
            </div>
            <div className="php8-compare__arrow"></div>
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default"></span><span className="keyword">function </span><span className="default">count_and_iterate</span><span className="keyword">(</span><span className="default">Iterator</span><span className="keyword">&amp;</span><span className="default">Countable $value</span><span className="keyword">) {`{`}<br />&nbsp; &nbsp; foreach (</span><span className="default">$value </span><span className="keyword">as </span><span className="default">$val</span><span className="keyword">) {`{`}<br />&nbsp; &nbsp; &nbsp; &nbsp; echo </span><span className="default">$val</span><span className="keyword">;<br />&nbsp; &nbsp; {`}`}<br /><br />&nbsp; &nbsp; </span><span className="default">count</span><span className="keyword">(</span><span className="default">$value</span><span className="keyword">);<br />{`}`}</span>
</span>
</code></div>                </div>
            </div>
        </div>
        <div className="php8-compare__content">
            <p>Use intersection types when a value needs to satisfy multiple type constraints at the same time.</p>
            <p>It is not currently possible to mix intersection and union types together such as <code>A&amp;B|C</code>.</p>        </div>
    </div>

    <div className="php8-compare">
        <h2 className="php8-h2" id="never_return_type">
            Never return type            <a className="php8-rfc" href="https://wiki.php.net/rfc/noreturn_type">RFC</a> <a className="php8-rfc" href="/manual/en/language.types.declarations.php#language.types.declarations.never">Doc</a>
        </h2>
        <div className="php8-compare__main">
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label">PHP &lt; 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default"></span><span className="keyword">function </span><span className="default">redirect</span><span className="keyword">(</span><span className="default">string $uri</span><span className="keyword">) {`{`}<br />&nbsp; &nbsp; </span><span className="default">header</span><span className="keyword">(</span><span className="string">'Location: ' </span><span className="keyword">. </span><span className="default">$uri</span><span className="keyword">);<br />&nbsp; &nbsp; exit();<br />{`}`}<br /> <br />function </span><span className="default">redirectToLoginPage</span><span className="keyword">() {`{`}<br />&nbsp; &nbsp; </span><span className="default">redirect</span><span className="keyword">(</span><span className="string">'/login'</span><span className="keyword">);<br />&nbsp; &nbsp; echo </span><span className="string">'Hello'</span><span className="keyword">; </span><span className="comment">// &lt;- dead code<br /></span><span className="keyword">{`}`}</span>
</span>
</code></div>                </div>
            </div>
            <div className="php8-compare__arrow"></div>
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default"></span><span className="keyword">function </span><span className="default">redirect</span><span className="keyword">(</span><span className="default">string $uri</span><span className="keyword">): </span><span className="default">never </span><span className="keyword">{`{`}<br />&nbsp; &nbsp; </span><span className="default">header</span><span className="keyword">(</span><span className="string">'Location: ' </span><span className="keyword">. </span><span className="default">$uri</span><span className="keyword">);<br />&nbsp; &nbsp; exit();<br />{`}`}<br /> <br />function </span><span className="default">redirectToLoginPage</span><span className="keyword">(): </span><span className="default">never </span><span className="keyword">{`{`}<br />&nbsp; &nbsp; </span><span className="default">redirect</span><span className="keyword">(</span><span className="string">'/login'</span><span className="keyword">);<br />&nbsp; &nbsp; echo </span><span className="string">'Hello'</span><span className="keyword">; </span><span className="comment">// &lt;- dead code detected by static analysis <br /></span><span className="keyword">{`}`}</span>
</span>
</code></div>                </div>
            </div>
        </div>
        <div className="php8-compare__content">
            <p>A function or method declared with the <code>never</code> type indicates that it will not return a value and will either throw an exception or end the script’s execution with a call of <code>die()</code>, <code>exit()</code>, <code>trigger_error()</code>, or something similar.</p>        </div>
    </div>

    <div className="php8-compare">
        <h2 className="php8-h2" id="final_class_constants">
            Final class constants            <a className="php8-rfc" href="https://wiki.php.net/rfc/final_class_const">RFC</a> <a className="php8-rfc" href="/manual/en/language.oop5.final.php#language.oop5.final.example.php81">Doc</a>
        </h2>
        <div className="php8-compare__main">
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label">PHP &lt; 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default"></span><span className="keyword">class </span><span className="default">Foo<br /></span><span className="keyword">{`{`}<br />&nbsp; &nbsp; public const </span><span className="default">XX </span><span className="keyword">= </span><span className="string">"foo"</span><span className="keyword">;<br />{`}`}<br /><br />class </span><span className="default">Bar </span><span className="keyword">extends </span><span className="default">Foo<br /></span><span className="keyword">{`{`}<br />&nbsp; &nbsp; public const </span><span className="default">XX </span><span className="keyword">= </span><span className="string">"bar"</span><span className="keyword">; </span><span className="comment">// No error<br /></span><span className="keyword">{`}`}</span>
</span>
</code></div>                </div>
            </div>
            <div className="php8-compare__arrow"></div>
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default"></span><span className="keyword">class </span><span className="default">Foo<br /></span><span className="keyword">{`{`}<br />&nbsp; &nbsp; final public const </span><span className="default">XX </span><span className="keyword">= </span><span className="string">"foo"</span><span className="keyword">;<br />{`}`}<br /><br />class </span><span className="default">Bar </span><span className="keyword">extends </span><span className="default">Foo<br /></span><span className="keyword">{`{`}<br />&nbsp; &nbsp; public const </span><span className="default">XX </span><span className="keyword">= </span><span className="string">"bar"</span><span className="keyword">; </span><span className="comment">// Fatal error<br /></span><span className="keyword">{`}`}</span>
</span>
</code></div>                </div>
            </div>
        </div>
        <div className="php8-compare__content">
            <p>It is possible to declare final class constants, so that they cannot be overridden in child classes.</p>        </div>
    </div>

    <div className="php8-compare">
        <h2 className="php8-h2" id="explicit_octal_numeral_notation">
            Explicit Octal numeral notation            <a className="php8-rfc" href="https://wiki.php.net/rfc/explicit_octal_notation">RFC</a> <a className="php8-rfc" href="/manual/en/migration81.new-features.php#migration81.new-features.core.octal-literal-prefix">Doc</a>
        </h2>
        <div className="php8-compare__main">
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label">PHP &lt; 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default">016 </span><span className="keyword">=== </span><span className="default">16</span><span className="keyword">; </span><span className="comment">// false because `016` is octal for `14` and it's confusing<br /></span><span className="default">016 </span><span className="keyword">=== </span><span className="default">14</span><span className="keyword">; </span><span className="comment">// true </span>
</span>
</code></div>                </div>
            </div>
            <div className="php8-compare__arrow"></div>
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default">0o16 </span><span className="keyword">=== </span><span className="default">16</span><span className="keyword">; </span><span className="comment">// false — not confusing with explicit notation<br /></span><span className="default">0o16 </span><span className="keyword">=== </span><span className="default">14</span><span className="keyword">; </span><span className="comment">// true </span>
</span>
</code></div>                </div>
            </div>
        </div>
        <div className="php8-compare__content">
            <p>It is now possible to write octal numbers with the explicit <code>0o</code> prefix.</p>        </div>
    </div>

    <div className="php8-compare">
        <h2 className="php8-h2" id="fibers">
            Fibers            <a className="php8-rfc" href="https://wiki.php.net/rfc/fibers">RFC</a> <a className="php8-rfc" href="/manual/en/language.fibers.php">Doc</a>
        </h2>
        <div className="php8-compare__main">
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label">PHP &lt; 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default">$httpClient</span><span className="keyword">-&gt;</span><span className="default">request</span><span className="keyword">(</span><span className="string">'https://example.com/'</span><span className="keyword">)<br />&nbsp; &nbsp; &nbsp; &nbsp; -&gt;</span><span className="default">then</span><span className="keyword">(function (</span><span className="default">Response $response</span><span className="keyword">) {`{`}<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return </span><span className="default">$response</span><span className="keyword">-&gt;</span><span className="default">getBody</span><span className="keyword">()-&gt;</span><span className="default">buffer</span><span className="keyword">();<br />&nbsp; &nbsp; &nbsp; &nbsp; {`}`})<br />&nbsp; &nbsp; &nbsp; &nbsp; -&gt;</span><span className="default">then</span><span className="keyword">(function (</span><span className="default">string $responseBody</span><span className="keyword">) {`{`}<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; print </span><span className="default">json_decode</span><span className="keyword">(</span><span className="default">$responseBody</span><span className="keyword">)[</span><span className="string">'code'</span><span className="keyword">];<br />&nbsp; &nbsp; &nbsp; &nbsp; {`}`});</span>
</span>
</code></div>                </div>
            </div>
            <div className="php8-compare__arrow"></div>
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default">$response </span><span className="keyword">= </span><span className="default">$httpClient</span><span className="keyword">-&gt;</span><span className="default">request</span><span className="keyword">(</span><span className="string">'https://example.com/'</span><span className="keyword">);<br />print </span><span className="default">json_decode</span><span className="keyword">(</span><span className="default">$response</span><span className="keyword">-&gt;</span><span className="default">getBody</span><span className="keyword">()-&gt;</span><span className="default">buffer</span><span className="keyword">())[</span><span className="string">'code'</span><span className="keyword">];</span>
</span>
</code></div>                </div>
            </div>
        </div>
        <div className="php8-compare__content">
            <p>Fibers are primitives for implementing lightweight cooperative concurrency. They are a means of creating code blocks that can be paused and resumed like Generators, but from anywhere in the stack. Fibers themselves don't magically provide concurrency, there still needs to be an event loop. However, they allow blocking and non-blocking implementations to share the same API.</p><p>Fibers allow getting rid of the boilerplate code previously seen with <code>Promise::then()</code> or Generator based coroutines. Libraries will generally build further abstractions around Fibers, so there's no need to interact with them directly.</p>        </div>
    </div>

    <div className="php8-compare">
        <h2 className="php8-h2" id="array_unpacking_support_for_string_keyed_arrays">
            Array unpacking support for string-keyed arrays            <a className="php8-rfc" href="https://wiki.php.net/rfc/array_unpacking_string_keys">RFC</a> <a className="php8-rfc" href="/manual/en/language.types.array.php#language.types.array.unpacking">Doc</a>
        </h2>
        <div className="php8-compare__main">
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label">PHP &lt; 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default">$arrayA </span><span className="keyword">= [</span><span className="string">'a' </span><span className="keyword">=&gt; </span><span className="default">1</span><span className="keyword">];<br /></span><span className="default">$arrayB </span><span className="keyword">= [</span><span className="string">'b' </span><span className="keyword">=&gt; </span><span className="default">2</span><span className="keyword">];<br /><br /></span><span className="default">$result </span><span className="keyword">= </span><span className="default">array_merge</span><span className="keyword">([</span><span className="string">'a' </span><span className="keyword">=&gt; </span><span className="default">0</span><span className="keyword">], </span><span className="default">$arrayA</span><span className="keyword">, </span><span className="default">$arrayB</span><span className="keyword">);<br /><br /></span><span className="comment">// ['a' =&gt; 1, 'b' =&gt; 2]</span>
</span>
</code></div>                </div>
            </div>
            <div className="php8-compare__arrow"></div>
            <div className="php8-compare__block example-contents">
                <div className="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div className="php8-code phpcode">
                    <div className="phpcode"><code><span className="html">
<span className="default">$arrayA </span><span className="keyword">= [</span><span className="string">'a' </span><span className="keyword">=&gt; </span><span className="default">1</span><span className="keyword">];<br /></span><span className="default">$arrayB </span><span className="keyword">= [</span><span className="string">'b' </span><span className="keyword">=&gt; </span><span className="default">2</span><span className="keyword">];<br /><br /></span><span className="default">$result </span><span className="keyword">= [</span><span className="string">'a' </span><span className="keyword">=&gt; </span><span className="default">0</span><span className="keyword">, ...</span><span className="default">$arrayA</span><span className="keyword">, ...</span><span className="default">$arrayB</span><span className="keyword">];<br /><br /></span><span className="comment">// ['a' =&gt; 1, 'b' =&gt; 2]</span>
</span>
</code></div>                </div>
            </div>
        </div>
        <div className="php8-compare__content">
            <p>PHP supported unpacking inside arrays through the spread operator before, but only if the arrays had integer keys. Now it is possible to unpack arrays with string keys too.</p>        </div>
    </div>
</section>

<section className="php8-section center php8-section_light php8-columns">
    <div className="php8-column">
        <h2 className="php8-h2" id="performance_improvements">Performance Improvements</h2>
        <div className="php8-compare__content">
            <div className="center">
                <strong>Symfony Demo App request time</strong><br />
                25 consecutive runs, 250 requests (sec)<br />
                (less is better)<br />                <div className="php8-chart__table">
                    <img src={phpPerformanceImage} alt="" />
                </div>
            </div>
            <h3 className="php8-h3">The result (relative to PHP 8.0):</h3>
            <ul>
                <li>23.0% Symfony Demo speedup</li>
                <li>3.5% WordPress speedup</li>
            </ul>
            <h3 className="php8-h3">Performance related features in PHP 8.1:</h3>
            <ul>
                <li>JIT backend for ARM64 (AArch64)</li>
                <li>Inheritance cache (avoid relinking classes in each request)</li>
                <li>Fast class name resolution (avoid lowercasing and hash lookup)</li>
                <li>timelib and ext/date performance improvements</li>
                <li>SPL file-system iterators improvements</li>
                <li>serialize/unserialize optimizations</li>
                <li>Some internal functions optimization (get_declared_classes(), explode(), strtr(), strnatcmp(), dechex())</li>
                <li>JIT improvements and fixes</li>
            </ul>
        </div>
    </div>

    <div className="php8-column">
        <h2 className="php8-h2" id="other_new_things">New Classes, Interfaces, and Functions</h2>
        <div className="php8-compare__content php8-compare__content--block">
            <ul>
                <li>New <code>#[ReturnTypeWillChange]</code> attribute.</li>
                <li>New <code>fsync</code> and <code>fdatasync</code> functions.</li>
                <li>New <code>array_is_list</code> function.</li>
                <li>New Sodium XChaCha20 functions.</li>
            </ul>
        </div>
        <h2 className="php8-h2 php8-h2_margin-top" id="deprecations_and_bc_breaks">Deprecations and backward compatibility breaks</h2>
        <div className="php8-compare__content">
            <ul>
                <li>Passing null to non-nullable internal function parameters is deprecated.</li>
                <li>Tentative return types in PHP built-in class methods</li>
                <li><code>Serializable</code> interface deprecated.</li>
                <li>HTML entity en/decode functions process single quotes and substitute by default.</li>
                <li><code>$GLOBALS</code> variable restrictions.</li>
                <li>MySQLi: Default error mode set to exceptions.</li>
                <li>Implicit incompatible float to int conversion is deprecated.</li>
                <li>finfo Extension: <code>file_info</code> resources migrated to existing finfo objects.</li>
                <li>IMAP: imap resources migrated to <code>IMAP\Connection</code> class objects.</li>
                <li>FTP Extension: Connection resources migrated to <code>FTP\Connection</code> class objects.</li>
                <li>GD Extension: Font identifiers migrated to <code>GdFont</code> class objects.</li>
                <li>LDAP: resources migrated to <code>LDAP\Connection</code>, <code>LDAP\Result</code>, and <code>LDAP\ResultEntry</code> objects.</li>
                <li>PostgreSQL: resources migrated to <code>PgSql\Connection</code>, <code>PgSql\Result</code>, and <code>PgSql\Lob</code> objects.</li>
                <li>Pspell: pspell, pspell config resources migrated to <code>PSpell\Dictionary</code>, <code>PSpell\Config</code> class objects.</li>
            </ul>
        </div>
    </div>
</section>

<section className="php8-section php8-section_dark php8-section_footer php8-footer">
    <div className="php8-section__content">
        <h2 className="php8-h2 center">Better performance, better syntax, improved type safety.</h2>
        <div className="php8-button-wrapper center">
            <a className="php8-button php8-button_light" href="/downloads">Upgrade to PHP 8.1 now!</a>
        </div>
        <div className="php8-footer__content">
            <p>
        For source downloads of PHP 8.1 please visit the <a href="https://www.php.net/downloads">downloads</a> page.
        Windows binaries can be found on the <a href="https://windows.php.net/download">PHP for Windows</a> site.
        The list of changes is recorded in the <a href="https://www.php.net/ChangeLog-8.php#PHP_8_1">ChangeLog</a>.
      </p>
      <p>
        The <a href="/manual/en/migration81.php">migration guide</a> is available in the PHP Manual. Please
        consult it for a detailed list of new features and backward-incompatible changes.
      </p>        </div>
    </div>
</section>

    </section>
    

  </div>
        </>
    )
}

export default CurrentVersion