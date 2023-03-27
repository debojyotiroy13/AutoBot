# AutoBot
Basic Assistant

### Technical Description:
Use OpenAI’s text embeddings to build an internal recommendation engine. OpenAI’s text embeddings measure the relatedness of text strings. Embeddings are commonly used for:
* Search
* Recommendations 

### Problem:
1. We as developers spend a lot of time searching through the confluence pages to search for a piece of information. AutoBot assistant will brige in this gap.
2. We perform various actions on a usual day at work which can be performed by a bot. Many of these operations can be done by the AutoBot assistant.

### Solution:
1. Index oracle internal data (mostly scattered over confluence pages) into a knowledgebase and feed the dataset into LLM (Large Language Model) which then responds with all kinds of questions. 
2. Use Plugins to trigger action.

### Usecase based on search:
* Examples of HOW: How to onboard a new joiner, how to request certain access, how to spin up a new CICD instance, how to deploy a service, and how to add a debugger.
* Examples of WHAT: What is the new feature? What is the property to enable a certain feature? What is the expected FAW release date? What is the status of this feature under development? Who is working on a feature?
* Asking JIRA:


### Usecase based on action:
* Create JIRA
* Request access to Global JMC
* Request a Screen/Monitor
* Order a Yubikey

