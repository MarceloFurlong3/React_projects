import PropTypes from 'prop-types';


export const FirstApp = ({
    title = "hola soy un perro",
    subTitle =  "soy un substitulo",
    name
}) => {



    return (
        <>
        
        <h1 data-testid="test-title">{ title }</h1>
        
        <p> {subTitle} </p>
        <p> {subTitle} </p>
        <p> {name} </p>
        
        </>
    )
}

FirstApp.propTypes = {
title:PropTypes.string.isRequired,
subTitle:PropTypes.string //si ponenemos .requaried entonces no podemos usar default si o si tenemso que darle valor
}


FirstApp.defaultProps = {
    //title:"no hay titulo",
    subTitle:"no hay substitulo",
    name:"soy un cacahuate"
}