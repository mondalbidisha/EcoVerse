import { useEffect, useState } from "react";
import { Layout } from "./Dashboard/Layout";
import { DockElements } from "./DockElements";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Link, useNavigate } from "react-router-dom";
import { ActionBox } from "./ActionBox";
import { Loader } from "./Loader";
import LoaderSVG from "./../assets/loader.svg";
import generateLoadingMessage from "../util/genericUtils";

const ActionsLayout = () => {
		const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [categorisedActions, setCategorisedActions] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [isCategoriesLoading, setIsCategiriesLoading] = useState(true);
    const [isActionsLoading, setIsActionsLoading] = useState(true);

    const getAllActionCategories = async () => {
      const loggedInUser = localStorage.getItem('user');
      if(loggedInUser) {
        const response = await axios.get(`${BACKEND_URL}/api/v1/category`);
        setCategories(response.data.payload);
        setSelectedCategory(response.data.payload[0].id);
        console.log(response.data.payload[0].id)
        setIsCategiriesLoading(false);
      } else {
        navigate('/login');
      }
    }

    const getCategorisedActions = async (categoryId: string) => {
      setIsActionsLoading(true)
      const response = await axios.get(`${BACKEND_URL}/api/v1/action/category/${categoryId}`);
      setCategorisedActions(response.data.payload);
      setIsActionsLoading(false)
    }

    useEffect(() => {
				if(isCategoriesLoading) {
					getAllActionCategories() 
				}
        if(selectedCategory || isActionsLoading) {
          getCategorisedActions(selectedCategory)
        }
    }, [categories, selectedCategory])

    return (
      <Layout>
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-1 bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950 pt-10 pb-10">
          <div className="text-center text-slate-100 text-3xl font-medium uppercase opacity-90 tracking-[4px] md:mb-5">
            Actions
          </div>
          <div className="w-full">
            {
                isCategoriesLoading
                ?
                  <Loader 
                    message={generateLoadingMessage()}
                  />
                :
                  <>
                    <div className="mb-10">
                      <DockElements 
                        categories={categories}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                      />
                    </div>
                    <div className="w-full grid grid-cols-1">
                      <div className="flex flex-col items-center overflow-y-auto mt-5 md:px-20 md:pb-20">
                        <div className="md:w-[65vw] sm:w-[80%] h-[60vh]">
                          {
                            isActionsLoading 
                            ?
                              <div className="w-full flex flex-row justify-center mt-5">
                                <img src={LoaderSVG} width={150} height={150} alt="Loading..." />
                              </div>
                            :
                              <>
                                {categorisedActions.map((item: any) => (
                                  /* eslint-disable react/jsx-key */
                                  <Link to={`/action/${item.id}`}>
                                    <div className="my-5 dark">
                                      <ActionBox {...item} key={item.id} cta={"Log Action"}/>
                                    </div>
                                  </Link>
                                ))}
                              </>
                          }
                        </div>
                      </div>
                    </div>
                  </>
            }
          </div>
        </div>
      </Layout>
    );
  };
  
  export default ActionsLayout;