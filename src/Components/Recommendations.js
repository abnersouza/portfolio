import React from 'react';

const Recommendations = ({ data }) => {
   if (data) {
      var recommendations = data.recommendations.map(function (recommendations) {
         return <li key={recommendations.user}>
            <blockquote>
               <p>{recommendations.text}</p>
               <cite>{recommendations.user}</cite>
               <br />
               <br />
            </blockquote>
         </li>
      })
   }

   return (
      <section id="recommendations">
         <div className="text-container">
            <div className="row">

               <div className="two columns header-col">
                  <h1><span>Recommendations</span></h1>
               </div>

               <div className="ten columns flex-container">
                  <ul className="slides">
                     {recommendations}
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Recommendations;
