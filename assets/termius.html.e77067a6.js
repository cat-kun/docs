import{_ as s,o as n,c as e,a}from"./app.dcecfe39.js";const i={},c=a(`<h1 id="终端-vi-编辑显示行号" tabindex="-1"><a class="header-anchor" href="#终端-vi-编辑显示行号" aria-hidden="true">#</a> 终端 VI 编辑显示行号</h1><ul><li>打开终端</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 复制 vim 配置模版</span>
<span class="token function">cp</span> /usr/share/vim/vimrc ~/.vimrc

<span class="token comment"># 开启语法高亮</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;syntax on&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.vimrc

<span class="token comment"># 开启行号显示</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;set nu!&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.vimrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),t=[c];function l(r,o){return n(),e("div",null,t)}const m=s(i,[["render",l],["__file","termius.html.vue"]]);export{m as default};
