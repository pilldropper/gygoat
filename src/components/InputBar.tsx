function InputBar() {
  return (
    <div className="flex justify-center items-center bg-gray-100 p-4 m-20">
      <input type="text" placeholder="Enter a link..." />
      <button>Download</button>
    </div>
  );
}

export default InputBar;