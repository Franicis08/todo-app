import { useLocation } from "react-router";

function Footer({tasks}){
    const location = useLocation().pathname

    return (
        <>
        <footer className=" mt-auto bg-green-950 h-20">
         {location == "/todo" ? (
               <div className="h-full w-full flex items-center justify-between text-white text-base p-5 capitalize">
                      <h1>total: {tasks.length}</h1>

                <div className="flex gap-5">
                    <p className="relative pl-4 before:h-2 before:w-2 before:absolute before:left-0 before:top-[40%] 
                    before:transform before:tranlate-y-[-50%] before:bg-amber-400 before:rounded-full">{tasks.filter((i) => i.completed).length} Completed</p>
                    <p className="relative pl-4 before:h-2 before:w-2 before:absolute before:left-0 before:top-[40%] 
                    before:transform before:tranlate-y-[-50%] before:bg-red-400 before:rounded-full">{tasks.filter((i) => !i.completed).length} pending</p>
                </div>
                
            </div>
         ):(<div>
            <footer className="bg-emerald-950 text-emerald-200/80 text-sm py-4">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <p>© {new Date().getFullYear()} Todo App</p>
          <div className="space-x-4">
            <span>• Built with React & Tailwind</span>
          </div>
        </div>
      </footer>

         </div>)}
        </footer>
        </>
    )
}

export default Footer;