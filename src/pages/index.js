import React, { useEffect } from "react"
import SEO from "../components/seo"

const IndexPage = () => {

  useEffect(() => { 
    console.log(`
    #     #                              #######                             ### 
    #     # ###### #      #      ######     #    #    # ###### #####  ###### ### 
    #     # #      #      #      #    #     #    #    # #      #    # #      ### 
    ####### #####  #      #      #    #     #    ###### #####  #    # #####   #  
    #     # #      #      #      #    #     #    #    # #      #####  #          
    #     # #      #      #      #    #     #    #    # #      #   #  #      ### 
    #     # ###### ###### ###### ######     #    #    # ###### #    # ###### ### `);
  });

  return (<div>
    <SEO title="Home"/>
    <p>Hello World</p>
  </div>)
}


export default IndexPage
