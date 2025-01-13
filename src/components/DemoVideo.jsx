const DemoVideo = () => {
  return (
    <div className="flex justify-center -mt-32">
      <video width="70%" controls className="rounded-xl">
        <source
          src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default DemoVideo;
