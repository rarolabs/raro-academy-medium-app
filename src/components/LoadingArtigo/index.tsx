export const LoadingArtigo = () => {
        return (
            <div className="my-30">
                <div className="flex h-screen items-center justify-center bg-white">
                    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                        <div>
                            <h2 className="text-gray-800 text-center text-3xl font-semibold">
                                Carregando o artigo ⌚</h2>
                            <p className="mt-2 text-gray-600">🐎📦 Chegando de charrete...</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
export default LoadingArtigo;
