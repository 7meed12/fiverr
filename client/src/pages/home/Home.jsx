import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";

import ImageCarousel from "../../components/CarouselFade/CarouselFade";
import VideoCarousel from "../../components/VideoCarousel/VideoCarousel";
import Courses from "../../components/Courses/Courses";


const news = [
  "./img/news1.jpg",
  "./img/news1-2.jpg",
  "./img/news1-3.jpg",
  "./img/news1-4.jpg"
]
const news2 = [
  "./img/news2-1.jpeg",
  "./img/news2-2.jpeg"
]
const videos = [
  "./img/1.mp4",
  "./img/2.mp4",
  "./img/3.mp4",
  "./img/4.mp4",
  "./img/5.mp4",
]


function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <div className="explore sm-12">
        <div className="container">
          <h1>المحتويات : </h1>
          <div className="items">

            <div className="item">
              <a href="https://heyzine.com/flip-book/deeee1bc2b.html" target="_blank">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                  alt=""
                />
              </a>
              <div className="line"></div>
              <a href="https://heyzine.com/flip-book/deeee1bc2b.html" target="_blank"> <span>الدليل الالكتروني</span></a>

            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <a href="#interviews"><span>المقابلات</span></a>
              
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
              
              <a href="#courses"><span>الدورات</span></a>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              
              <a href="#news"><span>الاخبار</span></a>
            </div>
          </div>
        </div>
      </div>

      <div className="features dark" dir="rtl">
        <div className="container">
          <div className="item md-6 sm-6">
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
          <div className="item md-6 sm-6">
            <video src="./img/adv.mp4" controls height={700}></video>
          </div>
        </div>
      </div>
      
      <div className="features" dir="rtl" id="interviews">
        <div className="container">
          <div className="item sm-12">
            <h1>عملنا شوية مقابلات مع ناس اشتغلوا في الفريلانس عشان يساعدونا نعرف اكتر عن المجال و ازاي نبدا</h1>
          </div>
          <div className="item sm-12">
            <VideoCarousel videos={videos}></VideoCarousel>
          </div>
        </div>
      </div>

      <div className="features dark lg-12 md-12" dir="rtl" id="news">
        <div className="container">
          <div className="item md-6 sm-6">
            <h1>
              ندوة " العمل الحر وأهميته لدى الشباب "
            </h1>
            <p>
              تحت  رعاية أ.د/ آمال كمال عميد كلية الإعلام وفنون الاتصال جامعة "٦ اكتوبر" وإشراف عام ا.م.د/ مروة صبحي رئيس قسم العلاقات العامة والإعلان وتحت إشراف د/إيناس السعيد المدرس بقسم العلاقات العامة والإعلان، أ/ أية محمود، أ/ أية صلاح
            </p>
            <div className="title">
              نظم طلاب مشروع تخرج "Telelance-Telemoney" بالمستوى الرابع قسم العلاقات العامة والإعلان يوم الأربعاء الموافق ٥ أبريل ٢٠٢٣ بمكتبة جامعة " ٦ اكتوبر" ندوة بعنوان "العمل الحر وأهميته لدى الشباب" لطلاب الكلية، حاضر بالندوة أ/ محمود عثمان متخصص سوشيال ميديا.
            </div>

            <div className="title">
              تضمنت الندوة محاضرات حول المفاهيم الأساسية للعمل الحر وكيفية تحديد مجال العمل المناسب والتسويق للخدمات الخاصة بك. كما تمت مناقشة أهم التحديات التي يمكن أن يواجهها العاملون الحر وطرق تجاوزها.
            </div>

            <div className="title">
              وفي نهاية الندوة، قدم المتحدث  نصائح عملية للمشاركين حول الكيفية التي يمكن أن يتبعوها لتحسين فرص النجاح في العمل الحر. وتمت مناقشة الأسئلة والاستفسارات التي طرحها المشاركون.
            </div>
            <div className="title">
              تهدف هذه الندوة إلى تمكين الأفراد من اتخاذ الخطوات اللازمة لبدء مشروعهم الخاص عبر الإنترنت وتحقيق النجاح من خلال العمل الحر "Freelance"
            </div>

          </div>
          <div className="item md-6 sm-6">
            <ImageCarousel imgs={news}></ImageCarousel>
          </div>
        </div>
      </div>
      <div className="features " dir="rtl">
        <div className="container lg-12 md-12">
          <div className="item md-6 sm-6">
            <h1>
              حملة " مستقبلنا رقمي "
            </h1>
            <p>
              اقيمت حمله " مستقبلنا رقمي "التي اطلقتها وزاره الإتصالات وتكنولوجيا المعلومات وهي حملة تستهدف تعزيز التحول الرقمي وتطوير المهارات الرقمية لدى الأفراد. وتهدف هذه الحملة إلى تعزيز الوعي بأهمية التحول الرقمي وتقديم الدعم والتدريب اللازم للأفراد لتحسين فرصهم في سوق الاعمال الرقمية و العمل الحر "Freelance"            </p>
            <div className="title">
              وشملت الحملة العديد من الفعاليات والأنشطة المختلفة، بما في ذلك الندوات وورش العمل والمسابقات والدورات التدريبية المجانية وقد شارك في الحملة مجموعة متنوعة من المؤسسات والشركات والمنظمات الحكومية والخاصة والتي تعمل على دعم التحول الرقمي وتطوير المهارات الرقمية لدى المجتمع وقد حققت حملة "مستقبلنا رقمي" نجاحًا كبيرًا، حيث تمكنت من تعزيز الوعي بأهمية التحول الرقمي وتوفير الدعم والتدريب اللازم للأفراد لتحسين فرصهم في سوق العمل. وتعتبر هذه الحملة مثالاً جيداً على الجهود التي تبذلها المؤسسات والمنظمات لتعزيز التحول الرقمي ودعم المهارات الرقمية في المجتمع.
            </div>

            <div className="title">
              وتوفر الحملة مجموعة واسعة من الدورات التدريبية المجانية عبر الإنترنت، بالإضافة إلى العديد من الفرص الأخرى للتعلم والتدريب. ومن بين الكورسات التي توفرها الحملة:

              1. دورة تعلم البرمجة من خلال Python
              <br />
              2. دورة تعلم تطوير تطبيقات الجوال باستخدام Flutter<br />
              3. دورة تعلم تصميم وتطوير مواقع الويب<br />
              4. دورة تعلم الذكاء الاصطناعي وتطبيقاته<br />
              5. دورة تعلم تطوير الألعاب باستخدام Unity<br />
              6. دورة تعلم تطوير تطبيقات الويب باستخدام React<br />
              7. دورة تعلم تطوير تطبيقات الويب باستخدام Angular<br />
              8. دورة تعلم تطوير تطبيقات الويب باستخدام Vue<br />
              بالإضافة إلى هذه الدورات، توفر الحملة أيضًا ورش عمل ومسابقات وفرص تطوعية ومنح دراسية وغيرها من الفرص التعليمية.
              9. تعلم تطوير تطبيقات الذكاء الاصطناعي باستخدام TensorFlow<br />
              10 . دورة تعلم تطوير تطبيقات الواقع المعزز باستخدام ARKit و ARCore<br />
              11. دورة تعلم تطوير تطبيقات الواقع الافتراضي باستخدام Unity<br />
              12. دورة تعلم تطوير تطبيقات الأندرويد باستخدام Kotlin<br />
              13. دورة تعلم تطوير تطبيقات iOS باستخدام Swift<br />
              14. دورة تعلم تطوير تطبيقات الويب باستخدام Node.js   <br />         </div>

            <div className="title">
              وبالإضافة إلى ذلك، تقدم حملة "مستقبلنا الرقمي" العديد من الخدمات الأخرى للمتدربين والمهتمين بمجال التقنية والبرمجة، مثل:
              <br />
              1. منصة تعليمية متكاملة تتضمن فيديوهات تعليمية ومواد تعليمية مكتوبة ومنتديات للمناقشة والتواصل مع المتدربين الآخرين والمدربين. <br />
              2. مجموعة من الفرص الوظيفية في شركات تقنية مختلفة، وذلك من خلال الشراكات التي تمتلكها الحملة مع هذه الشركات. <br />
              3. فرص التدريب والتدريب العملي في الشركات التقنية، وذلك من خلال برنامج المتدربين الصيفي الذي تقدمه الحملة. <br />

              وتقدم حملة "مستقبلنا الرقمي" هذه الخدمات والفرص بشكل مجاني ومفتوح للجميع، وتهدف إلى دعم الشباب العربي وتمكينهم من اكتساب المهارات اللازمة لدخول سوق العمل في مجال التقنية والبرمجة.

            </div>
            <div className="title" style={{ textAlign: "center" }}>
              <a href="https://itida.gov.eg/Arabic/Programs/future-work-is-digital/Pages/default.aspx  "> Itida</a>
            </div>

          </div>
          <div className="item md-6 sm-6">
            <img src="./img/news2.jpeg" alt="" />
          </div>
        </div>
      </div>

      <div className="features dark" dir="rtl">
        <div className="container">
          <div className="item md-6 sm-6">
            <h1>
              منحة " تعليم مهارات صماعة المحتوي الرقمي في الصحافة والإعلام "
            </h1>
            <p>
              اوضحت لجنة تطوير المهنة والتدريب بنقابة الصحفيين ان الدورة التدريبية تشمل : <br /> أنواع ووظائف المحتوى الصحفي الرقمي ، و مهارات صناعة المحتوى الرقمي ،<br />  و مهارات إدارة منصات الـ « Freelance » وتحقيق الأرباح عن بعد  ،<br />  وقواعد صناعة المحتوى وتجنب عقوبات ( الروبوت )
            </p>
            <div className="title">
              كما تشمل كتابة المحتوى الرقمي المتوافق مع محركات البحث - أهم الأدوات والتقنيات الحديثة لصناعة المحتوى الرقمي

            </div>

            <div className="title">
              كما أوضحت لجنة تطوير المهنة والتدريب بنقابة الصحفيين ، انها بنظام الساعات المعتمدة : 16 ساعة تدريبية خلال 8 محاضرات على مدار شهر ، ومنحة مجانية للصحفيين وأسرهم لـ50 فرد بأسبقية الحجز .

            </div>

            <div className="title">
              يقوم بالتدريب الكاتب الصحفى الأستاذ : عمرو أحمد الأنصاري ( خبير صناعة المحتوى والصحافة الرقمية )

            </div>
            <div className="title">
              يحصل المتدرب على شهادة معتمدة من مركز التدريب بالنقابة ، على الحجز بأسبقية السداد بمركز التدريب بالنقابة ، وجميع الدورات قاصرة على الأعضاء وأسرهم

            </div>
            <div className="title">
              للتواصل و الاستعلام : 01099221510

            </div>
          </div>
          <div className="item md-6 sm-6">
            <ImageCarousel imgs={news2}></ImageCarousel>
          </div>
        </div>
      </div>



      <div className="features " dir="rtl" id="courses">
        <div className=" md-12 ">
          <div className="sm-12 d-block w-100">
            <h1>
              دى مصادر هتساعدك يبقى ليك مصدر دخل ، شوف المجال اللى حابب تشتغل بيه وابدأ
            </h1>
          </div>
          <div className="sm-12 md-12 w-100 " >
            <Courses ></Courses>

          </div>
        </div>

      </div>

    </div>


  );
}

export default Home;
