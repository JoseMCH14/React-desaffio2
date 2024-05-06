const SocialButton = ( props ) => {
    
    return (
        <>
            <button type="button" className="btn border border-dark rounded-circle mx-2 mb-3 "><i className={ props.title }></i></button>
        </>
    )
}

export default SocialButton