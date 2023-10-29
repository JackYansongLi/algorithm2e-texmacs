<TeXmacs|2.1.2>

<style|<tuple|generic|centered-program>>

<\body>
  <\show-preamble>
    <assign|algo2e-input|<macro|<render-keyword|Input:>>>

    <assign|algo2e-output|<macro|<render-keyword|Output:>>>

    <assign|algo2e-while|<\xmacro|cond-block-seq>
      <numbered-line|><render-while> <arg|cond-block-seq|0>
      <render-do><no-page-break>

      <\indent>
        <arg|cond-block-seq|1>
      </indent>

      <numbered-line|><render-end-while><right-flush>
    </xmacro>>

    <assign|algo2e-for|<\xmacro|cond-block-seq>
      <numbered-line|><render-for> <arg|cond-block-seq|0>
      <render-do><no-page-break>

      <\indent>
        <arg|cond-block-seq|1>
      </indent>

      <numbered-line|><render-end-for><right-flush>
    </xmacro>>

    <assign|algo2e-if|<\xmacro|cond-block-seq>
      <numbered-line|><render-if> <arg|cond-block-seq|0>
      <render-then><no-page-break>

      <indent|<arg|cond-block-seq|1>>
    </xmacro>>

    <assign|algo2e-else-if|<\xmacro|cond-block-seq>
      <numbered-line|><render-else> <render-if> <arg|cond-block-seq|0>
      <render-then><no-page-break>

      <indent|<arg|cond-block-seq|1>>
    </xmacro>>

    <assign|algo2e-else|<\macro|body>
      <numbered-line|><render-else><no-page-break>

      <indent|<arg|body>>
    </macro>>

    <assign|algo2e-end-if|<macro|<with|font-series|bold|end if>>>

    \;

    \;
  </show-preamble>

  <\ignore>
    <\algorithm>
      <algo2e-input>

      <algo2e-output>

      <\numbered>
        body
      </numbered>
    </algorithm>

    \;
  </ignore>
</body>

<\initial>
  <\collection>
    <associate|page-medium|paper>
    <associate|preamble|false>
  </collection>
</initial>