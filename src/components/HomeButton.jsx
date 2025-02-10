export default function HomeButton({title}){
    return(
        <button
        className="text-white font-normal py-2 px-4 rounded-lg w-[250px] text-lg"
        style={{
          backgroundColor: "#5E2E53",
          borderRadius: "10px",
          fontSize: "18px",
        }}
      >
        {title}
      </button>
    )

}


