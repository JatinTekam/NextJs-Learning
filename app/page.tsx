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
    
    
  ]
  return (
    <div>
      <section className="w-full  mx-auto">
        <Hero/>
        <section className="h-10">
          <p className="text-center text-3xl font-bold">{"What's"} in Next.js? <span className="text-xl font-light" style={{color:"rgb(136, 136, 136)"}}>Everything you need to build great products on the web.</span></p>
        </section>
      </section>
    </div>
  );
}
