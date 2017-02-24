# nasaflickr
This is a simple app that can be used to see photos that were uploaded to Flickr by various NASA groups:
* NASA Goddard Space Center
* NASA HQ
* NASA Johnson
* NASA Kennedy
* NASA Langley
* NASA Orion Spacecraft

Demo is available at (https://nasaflickr.herokuapp.com/)

# Screenshots



# File Structure of App

```
nasaflickr/
├--- conf/
|    └──  browsersync-dist.conf.js
|    └──  browsersync.conf.js     
|    └──  gulp.conf.js	
|    └──  karma-auto.conf.js	
|    └──  karma.conf.js                           
│    └──  webpack-dist.conf.js               
│    └──  webpack-test.conf.js 
|    └──  webpack.conf.js   
|
├--- gulp_tasks/
|    └──  browsersync.js
|    └──  karma.js     
|    └──  misc.js	
|    └──  karma.conf.js                           
│    └──  webpack.js              
│  
|-- resources/
|
|-- src/
|    |-- app/
|    |    ├── actions 
|    |    | 	└── index.js
|    |    |		└── index.spec.js
|    |	  |
|    |    ├── components 
|    |    |		└── Header.js					        * Header Component
|    |    | 	└── ImageItem.js        		  * Container for each photo
|    |	  |		└── ImageSlider.js  			    * Component to display full size of a photo
|    |	  |		└── ImageThumbnail.js  			  * Container for each thumbnail in the photo preview
|    |	  |		└── MainSection.js  			    * Container for the main presentation area
|    | 	  |
|	 |	  ├── constants 
|    |    |		└── ActionTypes.js
|    |    |		└── styles.js        
|    |	  |		
|    |    ├── containers 
|    |    |		└── App.js
|    |    |		
|	 |	  ├── interface 
|    |    |		└── PhotoResult.js				    * Encapsulates all pertinent information for photo results.     
|    |    |	                                  This includes array of photos, total photo count, page.
|	 |	  ├── reducers 
|    |    |		└── errors.js                 * Stores error information
|	 |	  |		└── fullSizePhotos.js			    * Stores the full size info of photos in an array
|    |    |		└── fullSizePhotos.spec.js
|    |    |		└── index.js					        * Collection of reducers
|	 |	  |     └── photos.js					        * Stores the photo search results
|    |    |		└── photos.spec.js
|	 |	  |		└── sites.js					        * Stores the NASA sites' info in an array
|	 |	  |
|	 |	  ├── sagas
|	 |	  |		└── requestHelper.js			      * Makes REST calls to Flickr
|	 |	  |
|	 |	  ├── store
|	 |	  		└── configureStore.js
|	 |	  
|    |    
|    ├── customTheme.js                     * Contain all custom styles for Material UI
│    │   
│    ├── index.html                          
|    |                                      
|    ├── index.js  
|    |
|    ├── index.scss 							          * App Shared Sass Variables
|    |
|    ├── index.spec.js
|   
|
├── .babelrc                       
├── .editorconfig                         
├── .gitattributes                             
├── .gitignore                          
├── .yo-rc.json                          
├── README.md                   
├── gulpfile.js                        
├── package.json                       
```


# Components Used
* react
* react-redux (https://github.com/reactjs/react-redux)
* redux-saga (https://github.com/redux-saga/redux-saga)
* Material-UI (http://www.material-ui.com)

