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
import { Action, Category } from "../constants/types";

const ActionsLayout = () => {
		const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [categorisedActions, setCategorisedActions] = useState<Action[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<Category>({
      id: "",
      name: "",
      description:""
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isActionsLoading, setIsActionsLoading] = useState(true);

    const getAllActionCategories = async () => {
      const loggedInUser = localStorage.getItem('user');
      if(loggedInUser) {
        const response = await axios.get(`${BACKEND_URL}/api/v1/category`);
        setCategories(response.data.payload);
        const category = response.data.payload[0];
        setSelectedCategory(category);
        getCategorisedActions(category);
        setIsLoading(false);
      } else {
        navigate('/login');
      }
    }

    const getCategorisedActions = async (category: Category) => {
      setIsActionsLoading(true)
      const response = await axios.get(`${BACKEND_URL}/api/v1/action/category/${category.id}`);
      setCategorisedActions(response.data.payload);
      setIsActionsLoading(false)
    }

    const selectedCategoryAndGetActions = (category: Category) => {
      setSelectedCategory(category);
      getCategorisedActions(category);
    }

    useEffect(() => {
				if(isLoading) {
					getAllActionCategories() 
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
                isLoading
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
                        setSelectedCategory={selectedCategoryAndGetActions}
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
                                <div className="text-white text-center whitespace-pre text-2xl font-medium">{selectedCategory?.name}</div>
                                {categorisedActions.map((item: Action) => (
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