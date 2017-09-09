/*var VideoList = () => (
  <div className="video-list">
    <VideoListEntry />
     <VideoListEntry = exampleVideoData.map(function (item, index) {
      return item;
    })/>*/

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map((video, index)=> (
      <VideoListEntry video={video} key={index}/>
    )
    )}
    
   
  </div> 
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;


// var VideoList = (props) => (
//   <ul>
//     {props.exampleVideoData.map( VideoListEntry=>
//       <VideoList VideoListEntry={VideoListEntry} />
//     )}
//   </ul>
// );