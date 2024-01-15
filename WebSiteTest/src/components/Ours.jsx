import React from "react";
import "./Css/Ours.css";

const Ours = () => {
  return (
    <div className="biz-kimiz">
      <div className="card">
        <h2>Biz Kimiz</h2>
        <p>
          Avukatlık büromuz, müşterilere hukuki ihtiyaçları konusunda
          profesyonel destek sunan deneyimli bir ekip tarafından kurulmuştur.
        </p>
      </div>

      <div className="card">
        <h2>Avukatlarımız</h2>
        <p>
          Büromuzda görev yapan avukatlar, çeşitli hukuki alanlarda uzmanlık
          kazanmış ve müvekkillerimizin haklarını korumak için kararlılıkla
          çalışmaktadır.
        </p>
      </div>

      <div className="card">
        <h2>Misyonumuz</h2>
        <p>
          Misyonumuz, müvekkillerimize adil ve etkili hukuki hizmetler sunarak
          onların hukuki ihtiyaçlarını karşılamak, haklarını korumak ve adaleti
          sağlamaktır.
        </p>
      </div>

      <div className="card">
        <h2>İletişim</h2>
        <p>
          Size daha iyi hizmet verebilmek için buradayız. Bizimle iletişime
          geçmek veya randevu almak için lütfen bizimle{" "}
          <a href="/iletisim">iletişime</a> geçin.
        </p>
      </div>
    </div>
  );
};

export default Ours;
