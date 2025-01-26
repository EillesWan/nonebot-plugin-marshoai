import{_ as t,c as s,ae as e,o as i}from"./chunks/framework.BzDBnRMZ.js";const k=JSON.parse('{"title":"params","description":"","frontmatter":{"title":"params","order":100},"headers":[],"relativePath":"en/dev/api/plugin/func_call/params.md","filePath":"en/dev/api/plugin/func_call/params.md","lastUpdated":null}'),r={name:"en/dev/api/plugin/func_call/params.md"};function n(l,a,o,h,d,p){return i(),s("div",null,a[0]||(a[0]=[e('<h1 id="module-nonebot-plugin-marshoai-plugin-func-call-params" tabindex="-1"><strong>Module</strong> <code>nonebot_plugin_marshoai.plugin.func_call.params</code> <a class="header-anchor" href="#module-nonebot-plugin-marshoai-plugin-func-call-params" aria-label="Permalink to &quot;**Module** `nonebot_plugin_marshoai.plugin.func_call.params`&quot;">​</a></h1><h3 id="var-p" tabindex="-1">var <code>P</code> <a class="header-anchor" href="#var-p" aria-label="Permalink to &quot;var `P`&quot;">​</a></h3><ul><li><p><strong>Description</strong>: 参数类型泛型</p></li><li><p><strong>Default</strong>: <code>TypeVar(&#39;P&#39;, bound=&#39;Parameter&#39;)</code></p></li></ul><h3 id="class-paramtypes" tabindex="-1"><em><strong>class</strong></em> <code>ParamTypes</code> <a class="header-anchor" href="#class-paramtypes" aria-label="Permalink to &quot;***class*** `ParamTypes`&quot;">​</a></h3><h4 id="attr-string-string" tabindex="-1"><em><strong>attr</strong></em> <code>STRING = &#39;string&#39;</code> <a class="header-anchor" href="#attr-string-string" aria-label="Permalink to &quot;***attr*** `STRING = &#39;string&#39;`&quot;">​</a></h4><h4 id="attr-integer-integer" tabindex="-1"><em><strong>attr</strong></em> <code>INTEGER = &#39;integer&#39;</code> <a class="header-anchor" href="#attr-integer-integer" aria-label="Permalink to &quot;***attr*** `INTEGER = &#39;integer&#39;`&quot;">​</a></h4><h4 id="attr-array-array" tabindex="-1"><em><strong>attr</strong></em> <code>ARRAY = &#39;array&#39;</code> <a class="header-anchor" href="#attr-array-array" aria-label="Permalink to &quot;***attr*** `ARRAY = &#39;array&#39;`&quot;">​</a></h4><h4 id="attr-object-object" tabindex="-1"><em><strong>attr</strong></em> <code>OBJECT = &#39;object&#39;</code> <a class="header-anchor" href="#attr-object-object" aria-label="Permalink to &quot;***attr*** `OBJECT = &#39;object&#39;`&quot;">​</a></h4><h4 id="attr-boolean-boolean" tabindex="-1"><em><strong>attr</strong></em> <code>BOOLEAN = &#39;boolean&#39;</code> <a class="header-anchor" href="#attr-boolean-boolean" aria-label="Permalink to &quot;***attr*** `BOOLEAN = &#39;boolean&#39;`&quot;">​</a></h4><h4 id="attr-number-number" tabindex="-1"><em><strong>attr</strong></em> <code>NUMBER = &#39;number&#39;</code> <a class="header-anchor" href="#attr-number-number" aria-label="Permalink to &quot;***attr*** `NUMBER = &#39;number&#39;`&quot;">​</a></h4><h3 id="class-parameter-basemodel" tabindex="-1"><em><strong>class</strong></em> <code>Parameter(BaseModel)</code> <a class="header-anchor" href="#class-parameter-basemodel" aria-label="Permalink to &quot;***class*** `Parameter(BaseModel)`&quot;">​</a></h3><hr><h4 id="func-data-self-dict-str-any" tabindex="-1"><em><strong>func</strong></em> <code>data(self) -&gt; dict[str, Any]</code> <a class="header-anchor" href="#func-data-self-dict-str-any" aria-label="Permalink to &quot;***func*** `data(self) -&gt; dict[str, Any]`&quot;">​</a></h4><details><summary><b>Source code</b> or <a href="https://github.com/LiteyukiStudio/nonebot-plugin-marshoai/tree/main/nonebot_plugin_marshoai/plugin/func_call/params.py#L46" target="_blank">View on GitHub</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self) -&gt; dict[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Any]:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;type&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.type_, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;description&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.description, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{k: v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> k, v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.properties.items() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}}</span></span></code></pre></div></details><h4 id="attr-type-str-no-default" tabindex="-1"><em><strong>attr</strong></em> <code>type_: str = NO_DEFAULT</code> <a class="header-anchor" href="#attr-type-str-no-default" aria-label="Permalink to &quot;***attr*** `type_: str = NO_DEFAULT`&quot;">​</a></h4><h4 id="attr-description-str-no-default" tabindex="-1"><em><strong>attr</strong></em> <code>description: str = NO_DEFAULT</code> <a class="header-anchor" href="#attr-description-str-no-default" aria-label="Permalink to &quot;***attr*** `description: str = NO_DEFAULT`&quot;">​</a></h4><h4 id="attr-default-any-none" tabindex="-1"><em><strong>attr</strong></em> <code>default: Any = None</code> <a class="header-anchor" href="#attr-default-any-none" aria-label="Permalink to &quot;***attr*** `default: Any = None`&quot;">​</a></h4><h4 id="attr-properties-dict-str-any" tabindex="-1"><em><strong>attr</strong></em> <code>properties: dict[str, Any] = {}</code> <a class="header-anchor" href="#attr-properties-dict-str-any" aria-label="Permalink to &quot;***attr*** `properties: dict[str, Any] = {}`&quot;">​</a></h4><h4 id="attr-required-bool-false" tabindex="-1"><em><strong>attr</strong></em> <code>required: bool = False</code> <a class="header-anchor" href="#attr-required-bool-false" aria-label="Permalink to &quot;***attr*** `required: bool = False`&quot;">​</a></h4><h3 id="class-string-parameter" tabindex="-1"><em><strong>class</strong></em> <code>String(Parameter)</code> <a class="header-anchor" href="#class-string-parameter" aria-label="Permalink to &quot;***class*** `String(Parameter)`&quot;">​</a></h3><h4 id="attr-type-str-paramtypes-string" tabindex="-1"><em><strong>attr</strong></em> <code>type_: str = ParamTypes.STRING</code> <a class="header-anchor" href="#attr-type-str-paramtypes-string" aria-label="Permalink to &quot;***attr*** `type_: str = ParamTypes.STRING`&quot;">​</a></h4><h4 id="attr-properties-dict-str-any-field-default-factory-dict" tabindex="-1"><em><strong>attr</strong></em> <code>properties: dict[str, Any] = Field(default_factory=dict)</code> <a class="header-anchor" href="#attr-properties-dict-str-any-field-default-factory-dict" aria-label="Permalink to &quot;***attr*** `properties: dict[str, Any] = Field(default_factory=dict)`&quot;">​</a></h4><h4 id="attr-enum-list-str-none-none" tabindex="-1"><em><strong>attr</strong></em> <code>enum: list[str] | None = None</code> <a class="header-anchor" href="#attr-enum-list-str-none-none" aria-label="Permalink to &quot;***attr*** `enum: list[str] | None = None`&quot;">​</a></h4><h3 id="class-integer-parameter" tabindex="-1"><em><strong>class</strong></em> <code>Integer(Parameter)</code> <a class="header-anchor" href="#class-integer-parameter" aria-label="Permalink to &quot;***class*** `Integer(Parameter)`&quot;">​</a></h3><h4 id="attr-type-str-paramtypes-integer" tabindex="-1"><em><strong>attr</strong></em> <code>type_: str = ParamTypes.INTEGER</code> <a class="header-anchor" href="#attr-type-str-paramtypes-integer" aria-label="Permalink to &quot;***attr*** `type_: str = ParamTypes.INTEGER`&quot;">​</a></h4><h4 id="attr-properties-dict-str-any-field-default-factory-lambda-minimum-0-maximum-100" tabindex="-1"><em><strong>attr</strong></em> <code>properties: dict[str, Any] = Field(default_factory=lambda: {&#39;minimum&#39;: 0, &#39;maximum&#39;: 100})</code> <a class="header-anchor" href="#attr-properties-dict-str-any-field-default-factory-lambda-minimum-0-maximum-100" aria-label="Permalink to &quot;***attr*** `properties: dict[str, Any] = Field(default_factory=lambda: {&#39;minimum&#39;: 0, &#39;maximum&#39;: 100})`&quot;">​</a></h4><h4 id="attr-minimum-int-none-none" tabindex="-1"><em><strong>attr</strong></em> <code>minimum: int | None = None</code> <a class="header-anchor" href="#attr-minimum-int-none-none" aria-label="Permalink to &quot;***attr*** `minimum: int | None = None`&quot;">​</a></h4><h4 id="attr-maximum-int-none-none" tabindex="-1"><em><strong>attr</strong></em> <code>maximum: int | None = None</code> <a class="header-anchor" href="#attr-maximum-int-none-none" aria-label="Permalink to &quot;***attr*** `maximum: int | None = None`&quot;">​</a></h4><h3 id="class-array-parameter" tabindex="-1"><em><strong>class</strong></em> <code>Array(Parameter)</code> <a class="header-anchor" href="#class-array-parameter" aria-label="Permalink to &quot;***class*** `Array(Parameter)`&quot;">​</a></h3><h4 id="attr-type-str-paramtypes-array" tabindex="-1"><em><strong>attr</strong></em> <code>type_: str = ParamTypes.ARRAY</code> <a class="header-anchor" href="#attr-type-str-paramtypes-array" aria-label="Permalink to &quot;***attr*** `type_: str = ParamTypes.ARRAY`&quot;">​</a></h4><h4 id="attr-properties-dict-str-any-field-default-factory-lambda-items-type-string" tabindex="-1"><em><strong>attr</strong></em> <code>properties: dict[str, Any] = Field(default_factory=lambda: {&#39;items&#39;: {&#39;type&#39;: &#39;string&#39;}})</code> <a class="header-anchor" href="#attr-properties-dict-str-any-field-default-factory-lambda-items-type-string" aria-label="Permalink to &quot;***attr*** `properties: dict[str, Any] = Field(default_factory=lambda: {&#39;items&#39;: {&#39;type&#39;: &#39;string&#39;}})`&quot;">​</a></h4><h4 id="attr-items-str-field-string-description-数组元素类型" tabindex="-1"><em><strong>attr</strong></em> <code>items: str = Field(&#39;string&#39;, description=&#39;数组元素类型&#39;)</code> <a class="header-anchor" href="#attr-items-str-field-string-description-数组元素类型" aria-label="Permalink to &quot;***attr*** `items: str = Field(&#39;string&#39;, description=&#39;数组元素类型&#39;)`&quot;">​</a></h4><h3 id="class-functioncall-basemodel" tabindex="-1"><em><strong>class</strong></em> <code>FunctionCall(BaseModel)</code> <a class="header-anchor" href="#class-functioncall-basemodel" aria-label="Permalink to &quot;***class*** `FunctionCall(BaseModel)`&quot;">​</a></h3><hr><h4 id="func-hash-self-int" tabindex="-1"><em><strong>func</strong></em> <code>hash self =&gt; int</code> <a class="header-anchor" href="#func-hash-self-int" aria-label="Permalink to &quot;***func*** `hash self =&gt; int`&quot;">​</a></h4><details><summary><b>Source code</b> or <a href="https://github.com/LiteyukiStudio/nonebot-plugin-marshoai/tree/main/nonebot_plugin_marshoai/plugin/func_call/params.py#L104" target="_blank">View on GitHub</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __hash__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> hash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name)</span></span></code></pre></div></details><hr><h4 id="func-data-self-dict-str-any-1" tabindex="-1"><em><strong>func</strong></em> <code>data(self) -&gt; dict[str, Any]</code> <a class="header-anchor" href="#func-data-self-dict-str-any-1" aria-label="Permalink to &quot;***func*** `data(self) -&gt; dict[str, Any]`&quot;">​</a></h4><p><strong>Description</strong>: 生成函数描述信息</p><p><strong>Return</strong>: dict[str, Any]: 函数描述信息 字典</p><details><summary><b>Source code</b> or <a href="https://github.com/LiteyukiStudio/nonebot-plugin-marshoai/tree/main/nonebot_plugin_marshoai/plugin/func_call/params.py#L107" target="_blank">View on GitHub</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self) -&gt; dict[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Any]:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;type&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;function&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;function&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;description&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.description, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;parameters&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;type&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;object&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;properties&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {k: v.data() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> k, v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.arguments.items()}}, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;required&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [k </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> k, v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.arguments.items() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> v.default </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.kwargs}}</span></span></code></pre></div></details><h4 id="attr-name-str-no-default" tabindex="-1"><em><strong>attr</strong></em> <code>name: str = NO_DEFAULT</code> <a class="header-anchor" href="#attr-name-str-no-default" aria-label="Permalink to &quot;***attr*** `name: str = NO_DEFAULT`&quot;">​</a></h4><h4 id="attr-description-str-no-default-1" tabindex="-1"><em><strong>attr</strong></em> <code>description: str = NO_DEFAULT</code> <a class="header-anchor" href="#attr-description-str-no-default-1" aria-label="Permalink to &quot;***attr*** `description: str = NO_DEFAULT`&quot;">​</a></h4><h4 id="attr-arguments-dict-str-parameter-no-default" tabindex="-1"><em><strong>attr</strong></em> <code>arguments: dict[str, Parameter] = NO_DEFAULT</code> <a class="header-anchor" href="#attr-arguments-dict-str-parameter-no-default" aria-label="Permalink to &quot;***attr*** `arguments: dict[str, Parameter] = NO_DEFAULT`&quot;">​</a></h4><h4 id="attr-function-function-call-func-no-default" tabindex="-1"><em><strong>attr</strong></em> <code>function: FUNCTION_CALL_FUNC = NO_DEFAULT</code> <a class="header-anchor" href="#attr-function-function-call-func-no-default" aria-label="Permalink to &quot;***attr*** `function: FUNCTION_CALL_FUNC = NO_DEFAULT`&quot;">​</a></h4><h4 id="attr-kwargs-dict-str-any" tabindex="-1"><em><strong>attr</strong></em> <code>kwargs: dict[str, Any] = {}</code> <a class="header-anchor" href="#attr-kwargs-dict-str-any" aria-label="Permalink to &quot;***attr*** `kwargs: dict[str, Any] = {}`&quot;">​</a></h4>',46)]))}const m=t(r,[["render",n]]);export{k as __pageData,m as default};
