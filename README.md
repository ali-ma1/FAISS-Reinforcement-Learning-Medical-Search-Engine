# FAISS Reinforcement Learning Medical Search Engine  
> A project dedicated to developing an advanced search engine for the retrieval and discovery of medical research documents. This search engine leverages FAISS for high-dimensional vector similarity search, with its relevance and performance continuously enhanced through the application of the UCB1 (Upper Confidence Bound) algorithm in reinforcement learning.

> The project includes the development of a full-stack web application, constructed with Flask as the back-end framework. Given the constraints of using Google Colab for development, ngrok was employed to securely expose the local Flask server to the internet, facilitating remote access and interaction with the application. The front-end interface, meticulously crafted using HTML, CSS, and JavaScript, provides a seamless user experience for navigating and interacting with the search engine.

> To address the unique challenges of processing medical literature, a bespoke medical tokenizer was created using subword tokenization methodologies. This tokenizer was meticulously trained on a corpus of medical documents, ensuring the precise handling of complex and domain-specific terminology, thereby enhancing the fidelity of document representation.

> The user interface presents comprehensive metadata upon document selection, including key attributes such as 'doi', 'title', 'authors', 'author_corresponding', 'author_corresponding_institution', 'date', 'version', 'license', 'category', and 'abstract'. Additionally, the interface features actionable elements, such as a direct link to the full document and an option to return to the search results, ensuring an intuitive and efficient user experience.

## Design Process and Methods  
> **Full-Stack Web Application Development:**  
> - The search engine is architected as a full-stack web application with Flask driving the back-end logic, facilitating the retrieval and ranking of search results.  
> - Given the limitations of running Flask in Google Colab, ngrok was utilized to expose the local Flask server, enabling remote access and interaction with the application during development.  
> - The front-end is developed with a focus on user-centric design, employing HTML, CSS, and JavaScript to create a responsive and interactive interface.

> **Development of a Specialized Medical Tokenizer:**  
> - Recognizing the intricacies of medical research texts, a custom tokenizer was developed using advanced subword tokenization techniques.  
> - This tokenizer was trained on an extensive dataset of medical documents to accurately segment and encode the specialized language and nomenclature inherent to the medical domain.  
> - The resulting tokenization model significantly enhances the quality and accuracy of vector representations used in similarity search.

> **FAISS Integration and UCB1-Based Reinforcement Learning Optimization:**  
> - FAISS (Facebook AI Similarity Search) was integrated as the core engine for performing rapid and scalable similarity search across high-dimensional embeddings of medical research documents.  
> - The UCB1 (Upper Confidence Bound) algorithm was employed in the reinforcement learning framework to dynamically adjust the relevance of search results. UCB1 balances exploration and exploitation, improving search performance based on user interaction data.  
> - This combination of FAISS and UCB1 ensures that the search engine not only retrieves highly relevant documents but also continuously adapts to user preferences and search patterns over time.

> **Enhanced User Interaction and Metadata Display:**  
> - Upon selecting a document, the application presents an extensive array of metadata, including but not limited to 'doi', 'title', 'authors', 'author_corresponding', 'author_corresponding_institution', 'date', 'version', 'license', 'category', and 'abstract'.  
> - The interface is designed to be both informative and actionable, with clear pathways for users to access the full document or return to previous search results, facilitating efficient navigation and decision-making.

## Results and Impact  
> - This project represents a significant advancement in the field of medical research document retrieval, combining the strengths of FAISS for efficient similarity search with the adaptability of the UCB1 algorithm in reinforcement learning to continually enhance search result relevance.  
> - The custom-built medical tokenizer plays a critical role in ensuring that the search engine can accurately interpret and process the specialized language of medical research, leading to more precise search outcomes.  
> - The fully integrated web application offers a powerful tool for researchers, enabling them to quickly and effectively discover relevant medical research documents, with the system’s performance and accuracy improving iteratively through the use of UCB1-driven reinforcement learning.
