import FeatureCard from "@/components/FeatureCard";
import Hero from "@/components/Hero";


export default function Home() {
  //console.log("Hello world");
  const features=[
    {
      title:'Built-in Optimizations',
      desc:'Automatic Image, Font, and Script Optimizations for improved UX and Core Web Vitals.'
    },
    {
      title:'Dynamic HTML Streaming',
      desc:'Instantly stream UI from the server, integrated with the App Router and React Suspense.'
    },
    {
      title:'React Server Components',
      desc:'Add components without sending additional client-side JavaScript. Built on the latest React features.'
    },
    {
      title:'Data Fetching',
      desc:'Make your React component async and await your data. Next.js supports both server and client data fetching.'
    },
    {
      title:'CSS Support',
      desc:'Style your application with your favorite tools, including support for CSS Modules, Tailwind CSS, and popular community libraries.'
    },
    {
      title:'Client and Server Rendering',
      desc:'Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level.'
    },
    {
      title:'Server Actions',
      desc:'Run server code by calling a function. Skip the API. Then, easily revalidate cached data and update your UI in one network roundtrip.'
    },
    {
      title:'Route Handlers',
      desc:'Build API endpoints to securely connect with third-party services for handling auth or listening for webhooks.'
    },
    {
      title:'Advanced Routing & Nested Layouts',
      desc:'Create routes using the file system, including support for more advanced routing patterns and UI layouts.'
    }
  ]
  return (
    <div>
      <section className="w-full  mx-auto">
        <Hero/>
        <section className="h-10">
          <p className="text-center text-3xl font-bold mb-10">{"What's"} in Next.js? <span className="text-xl font-light" style={{color:"rgb(136, 136, 136)"}}>Everything you need to build great products on the web.</span></p>
          <div className="w-300 mx-auto flex justify-center gap-3 pb-6 flex-wrap">
            {
            features.map((ele,index)=>(
              <FeatureCard key={index} title={ele.title} desc={ele.desc}/>
            ))
          }
          </div>
        </section>
      </section>
    </div>
  );
}
