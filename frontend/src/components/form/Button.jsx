 export default function Button({

children,

type="button",

onClick,

loading=false,

variant="primary",

className=""

}){


const base=`
px-5 py-2
rounded
font-medium
transition
`;


const styles={

primary:

"bg-blue-600 text-white hover:bg-blue-700",

secondary:

"bg-gray-200 hover:bg-gray-300",

danger:

"bg-red-500 text-white hover:bg-red-600"

};


return(

<button

type={type}

onClick={onClick}

disabled={loading}

className={`${base}

${styles[variant]}

${loading?"opacity-50":""}

${className}

`}

>

{loading?"Please wait...":children}

</button>

);

}