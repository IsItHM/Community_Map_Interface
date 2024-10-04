// export default function Resource()
// {
//     return (
//         <div>
//             <h1>this is resource page</h1>
//         </div>
//     )
// }



// pages/resources.js

import Link from 'next/link';

export default function Resource() {
  const resources = [
    {
      title: "Climate Migration Projections",
      link: "https://sedac.ciesin.columbia.edu/data/set/climmig-groundswell-pop-mig-proj-1-8-ssps-rcps-2010-2050/data-download",
    },
    {
      title: "Urban Land Extent Projections",
      link: "https://sedac.ciesin.columbia.edu/data/set/ssp-1-8th-urban-land-extent-projection-base-year-ssp-2000-2100/data-download",
    },
    {
      title: "Population, Landscape, And Climate Estimates",
      link: "https://sedac.ciesin.columbia.edu/data/set/nagdc-population-landscape-climate-estimates-v4/data-download",
    },
    {
      title: "Urban-Rural Population and Land Area Estimates",
      link: "https://sedac.ciesin.columbia.edu/data/set/lecz-urban-rural-population-land-area-estimates-v3/data-download",
    },
    {
      title: "Sub-global SSP Narratives",
      link: "https://sedac.ciesin.columbia.edu/data/set/ssp-sub-global-scenarios-extend-ssp-narratives-literature-db-v1/data-download",
    },
    {
      title: "Urban and Land Backscatter Time Series",
      link: "https://sedac.ciesin.columbia.edu/data/set/urbanspatial-urban-land-backscatter-time-series-1993-2020/data-download",
    },
    {
      title: "Small Area Estimates of Poverty and Inequality",
      link: "https://sedac.ciesin.columbia.edu/data/set/povmap-small-area-estimates-poverty-inequality/maps",
    },
    {
      title: "Flood Data",
      link: "https://www.earthdata.nasa.gov/learn/pathfinders/disasters/floods-data-pathfinder",
    },
    {
      title: "Agriculture and Water Management",
      link: "https://www.earthdata.nasa.gov/learn/pathfinders/agricultural-and-water-resources-data-pathfinder",
    },
    {
      title: "Food Insecurity Hotspots Data Set",
      link: "https://sedac.ciesin.columbia.edu/data/set/food-food-insecurity-hotspots/docs",
    },
  ];

  return (
    <div className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8 mt-20">
      <h1 className="text-4xl font-bold text-white text-center mb-8 mt-5">Resource Page</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md p-6 hover:bg-gray-700 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-white mb-2">{resource.title}</h2>
            <Link href={resource.link}>
              <span className="text-indigo-400 hover:text-indigo-300 text-sm">
                Visit Link
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
