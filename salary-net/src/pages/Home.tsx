import Calculator from "../components/Calculator";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl">
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold">
          연봉 실수령액 계산기
        </h1>
        <p className="mt-2 text-slate-600">
          연봉을 입력하면 세후 월 실수령액을 추정합니다.
        </p>
      </header>
      <Calculator />
      <section className="mt-8" id="ad-result">
        {/* 결과 하단 광고 자리 */}
        <ins
          className="adsbygoogle block text-center"
          style={{ display: "block" }}
          data-ad-client=""
          data-ad-slot=""
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>
          {`if(document.documentElement.dataset.ads==="on" && window.adsbygoogle){
            (adsbygoogle = window.adsbygoogle || []).push({});
          }`}
        </script>
      </section>
    </div>
  );
}
