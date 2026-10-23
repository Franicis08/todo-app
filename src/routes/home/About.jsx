import { Link } from "react-router"
function About() {
    return (
        <>
            <div className="bg-slate-50 min-h-screen flex flex-col justify-between text-slate-800">
      
      

      {/* About Content Section */}
      <main className="flex max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          
          <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Our Mission
          </span>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-6">
            Built for focus, speed, and simplicity.
          </h2>
          
          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
            In a world full of bloated productivity suites and complicated project management software, we wanted to build something different. **Todo App** is designed to strip away the distractions and get straight to what matters: getting things done.
          </p>

          <hr className="border-slate-100 my-8" />

          <h3 className="text-xl font-bold text-slate-900 mb-4">Why Choose Us?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-emerald-900 mb-2">Zero Bloatware</h4>
              <p className="text-sm text-slate-600">No complex onboarding or unnecessary menus. Open the app and start managing your tasks instantly.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-emerald-900 mb-2">Modern Technology</h4>
              <p className="text-sm text-slate-600">Powered by React and styled with Tailwind CSS for a lightning-fast, buttery-smooth user experience.</p>
            </div>
          </div>

          <div className="flex justify-start">
            <Link
              to="/todo" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-emerald-600/20 transition"
            >
              Get Started Now
            </Link>
          </div>

        </div>
      </main>

    

    </div>
        </>
    )
}

export default About
