from langchain.document_loaders import TextLoader
from langchain.schema.messages import HumanMessage
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.embeddings import OllamaEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_ollama import ChatOllama

# loading logs
loader = TextLoader("logs/build_output.log")
docs = loader.load()

splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
chunks = splitter.split_documents(docs)

# create vector store
embeddings = OllamaEmbeddings(model="nomic-embed-text")
db = Chroma.from_documents(chunks, embeddings=embeddings, persist_directory="log_db")

llm = ChatOllama(model="gemma3:1b")
response = llm.invoke(
    [HumanMessage(content="Explain quantum physics to a 5-year old.")]
)
print(response.content)
