
import { useNavigate } from "react-router-dom"
import { NavBar } from "../components/navbar"
import { Button } from "../components/ui/button";

const Homepage = ()=>{
    const navigate = useNavigate();
    
    return (
      <div className="bg-white dark:bg-black dark:text-white h-screen w-screen flex flex-col">
        <NavBar />

        <div className="mt-15 text-nowrap ">
          <h1 className="font-GTWalsheim text-3xl mt-4 self-center place-self-center sm:text-5xl">
            Split your bills today
          </h1>
          <h2 className="font-cus font-GTWalsheim flex text-2xl place-self-center sm:text-4xl ">
            with {<p className="ml-2 text-purple-500 ">FairSpilt</p>}
          </h2>

          <div className="place-self-center mt-5">
            <Button
              onClick={() => {
                navigate("/signup");
              }}
              className="font-GTWalsheim hover:bg-purple-500  sm:text-lg "
            >
              Get Started
            </Button>
          </div>
        </div>
        <div>

        </div>
      </div>
    );
}

export default Homepage;