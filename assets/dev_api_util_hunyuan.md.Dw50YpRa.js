import{_ as i,c as a,ae as n,o as t}from"./chunks/framework.BzDBnRMZ.js";const d=JSON.parse('{"title":"util_hunyuan","description":"","frontmatter":{"title":"util_hunyuan","order":100},"headers":[],"relativePath":"dev/api/util_hunyuan.md","filePath":"zh/dev/api/util_hunyuan.md","lastUpdated":1734175019000}'),e={name:"dev/api/util_hunyuan.md"};function h(l,s,p,k,r,E){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="模块-nonebot-plugin-marshoai-util-hunyuan" tabindex="-1"><strong>模块</strong> <code>nonebot_plugin_marshoai.util_hunyuan</code> <a class="header-anchor" href="#模块-nonebot-plugin-marshoai-util-hunyuan" aria-label="Permalink to &quot;**模块** \`nonebot_plugin_marshoai.util_hunyuan\`&quot;">​</a></h1><hr><h3 id="func-generate-image-prompt-str" tabindex="-1"><em><strong>func</strong></em> <code>generate_image(prompt: str)</code> <a class="header-anchor" href="#func-generate-image-prompt-str" aria-label="Permalink to &quot;***func*** \`generate_image(prompt: str)\`&quot;">​</a></h3><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/nonebot-plugin-marshoai/tree/main/nonebot_plugin_marshoai/util_hunyuan.py#L16" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> generate_image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(prompt: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cred </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> credential.Credential(config.marshoai_tencent_secretid, config.marshoai_tencent_secretkey)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    httpProfile </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HttpProfile()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    httpProfile.endpoint </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;hunyuan.tencentcloudapi.com&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    clientProfile </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ClientProfile()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    clientProfile.httpProfile </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> httpProfile</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    client </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hunyuan_client.HunyuanClient(cred, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ap-guangzhou&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, clientProfile)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    req </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> models.TextToImageLiteRequest()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    params </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Prompt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: prompt, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;RspImgType&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;url&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Resolution&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1080:1920&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    req.from_json_string(json.dumps(params))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    resp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> client.TextToImageLite(req)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> resp.to_json_string()</span></span></code></pre></div></details>`,4)]))}const g=i(e,[["render",h]]);export{d as __pageData,g as default};
