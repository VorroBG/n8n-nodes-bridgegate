# n8n-nodes-bridgegate

This is an n8n community node. It lets you use _BridgeGate_ in your n8n workflows.

_BridgeGate_ n8n node for EMR/EHR integration enables seamless connectivity with any supported EMR/EHR system such as _Athena, Cerner, eClinicalWorks, EPIC, NextGen, PointClickCare, Practice Fusion_, allowing you to pull patient or clinical data based on defined parameters and receive orchestrated, validated, and transformed outputs.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### 1. **List APIs**

Retrieves the list of active API endpoints available for a given EHR and practice.
Use this operation to confirm which resources are enabled in your BridgeGate instance.

#### Authentication

* Requires a valid BridgeGate Bearer Token credential.

#### Input Parameters

* **EHR**: Select the EMR/EHR system (Athena, Epic, or Cerner).
* **Practice**: Enter your practice name or site identifier.

#### Output

* A structured list of available endpoints and resource types.

---

### 2. **Get Patient**

Retrieves a single patient’s demographic and identifying details.

#### Authentication

* Requires a valid BridgeGate Bearer Token credential.

#### Input Parameters

* **EHR**: Select the EHR system.
* **MRN**: Enter the patient’s Medical Record Number.
* **Practice**: Enter your practice name or site identifier.

#### Output

Returns patient demographic data such as:

* Patient ID and MRN
* Name, date of birth, gender
* Contact information and identifiers

---

### 3. **Get Encounter by Patient ID**

Retrieves encounter or visit records for a specific patient based on their MRN and practice.
Each encounter includes metadata such as provider, type, date, and diagnosis details.

#### Authentication

* Requires a valid BridgeGate Bearer Token credential.

#### Input Parameters

* **EHR**: Select the EHR system.
* **MRN**: Enter the patient’s Medical Record Number.
* **Practice**: Enter your practice name or site identifier.

#### Output

A collection of encounter records including:

* Encounter identifiers
* Provider and encounter type
* Visit dates and encounter status
* Diagnoses or notes (if available)

---

### 4. **Get Document by Patient ID**

Retrieves clinical documents, attachments, or notes associated with a patient.
This may include CCDs, discharge summaries, or uploaded clinical files depending on your EHR’s integration.

#### Authentication

* Requires a valid BridgeGate Bearer Token credential.

#### Input Parameters

* **EHR**: Select the EHR system.
* **MRN**: Enter the patient’s Medical Record Number.
* **Practice**: Enter your practice name or site identifier.

#### Output

Returns structured document metadata and content:

* Document ID and type
* Created or updated date
* Document name or category
* Raw or base64-encoded data when applicable


## Credentials

_To use the BridgeGate node, you will need a valid BridgeGate API Key. Please reach out to sales@vorro.net to request your key._

## Compatibility

_This node is compatible with n8n v1.119.1 and above. It has been tested against the latest stable n8n releases with no known compatibility issues._

## Usage

### **List APIs**
![List APIs](https://github.com/VorroBG/n8n-nodes-bridgegate/blob/a8eea9e9485a33e476cf38b64233e9f779abe374/assets/List-APIs.png)

---

### **Get Patient By MRN**
![Get Patient By MRN](https://github.com/VorroBG/n8n-nodes-bridgegate/blob/a8eea9e9485a33e476cf38b64233e9f779abe374/assets/Get-Patient-By-MRN.png)

---

### **Get Encounter By MRN**
![Get Encounter By MRN](https://github.com/VorroBG/n8n-nodes-bridgegate/blob/a8eea9e9485a33e476cf38b64233e9f779abe374/assets/Get-Encounter-By-MRN.png)

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)

