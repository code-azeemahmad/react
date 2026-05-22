/* eslint-disable no-unused-vars */

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'white',
    className = '',
    ...props
}) {
    return (
       <div className={`px-4 py-2 rounded-lg ${className} ${textColor} ${bgColor}`} {...props}>
        {children}</div> 
    )
}

export default Button;
