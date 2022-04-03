const NoArticles = () => {
    return (
        <div className="my-30">
            <div className="flex h-screen items-center justify-center bg-white">
                <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                    <div>
                        <h2 className="text-gray-800 text-center text-3xl font-semibold">Sem artigos... 🙁</h2>
                        <p className="mt-2 text-gray-600">O que você acha de publicar seu primeiro artigo?</p>
                    </div>
                    <div className="flex justify-end mt-4">
                        <a className="text-xl font-medium text-indigo-500" href="/artigos/novo">Vamos lá!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoArticles;