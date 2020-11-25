import { Helmet } from 'react-helmet'

function Meta({title, description,  keywords}) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome To Shoptify',
    description: 'We Sell almost anything!',
    keywords: 'electronics, cars, phones, gadgets'
}

export default Meta