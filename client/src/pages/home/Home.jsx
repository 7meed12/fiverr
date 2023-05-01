import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features" dir="rtl">
        <div className="container">
          <div className="item">
            <h1>عملك الحر هو افضل طريق لنجاحك</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              <p className="item"> زيادة الدخل</p>
             
            </div>
            <p>
            يمكنك أن تكون عاملاً حراً بشكل أساسي او بجوارك عملك التقليدي ، مع إمكانية حصولك علي العملة الصعبة مما يسمح لك بزيادة دخلك بدرجة كبيرة.

            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              تحقيق الاستقلالية            </div>
            <p>
            يمكن أن يساعد التعلم المستقل الأفراد على تطوير المهارات والمعرفة اللازمة لبناء عمل مستقل ناجح وتحقيق الاستقلال المالي.

            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              المرونة
            </div>
            <p>
            يتيح العمل الحر للمستقل بتحديد جدول زمني مرن وحرية العمل من أي مكان. يمكنك تحديد المواعيد النهائية وساعات العمل الخاصة بك ، طالما أنك تلبي احتياجات عميلك. 
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              اكتساب مهارات جديدة
            </div>
            <p>
            غالبًا ما يتطلب العمل المستقل مجموعة فريدة من المهارات ، يمكن أن يساعد التعلم المستقل الأفراد على اكتساب هذه المهارات وتطوير خبراتهم في المجال الذي يختارونه.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls />
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
           
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <span>الكتاب الالكتروني</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <span>المقابلات</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <span>المدونات الصوتية</span>
            </div>
            
            
            
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <div className="line"></div>
              <span>الدورات</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              <span>الاخبار</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              fiverr <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
