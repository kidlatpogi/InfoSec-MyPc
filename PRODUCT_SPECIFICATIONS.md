# Product Specifications List

This document outlines the required specifications for each product category based on the example data structure.

## General Specifications (All Products)
- **Product ID** - Unique identifier
- **Category** - Product category (CPU, GPU, RAM, etc.)
- **Price** - Base price in Philippine Pesos (₱)
- **Variants** - Available variants with price deltas
- **Description** - Product description and details

## CPU (Processor) Specifications

Based on example: **AMD Ryzen 5 5600X**

### Required Specifications:
- **Cores** - Number of CPU cores (e.g., 6 Cores)
- **Threads** - Number of threads (e.g., 12 Threads)
- **Base Clock** - Base operating frequency (e.g., 3.7 GHz)
- **Max Boost Clock** - Maximum boost frequency (e.g., up to 4.6 GHz)
- **L2 Cache** - Level 2 cache size (e.g., 3 MB)
- **L3 Cache** - Level 3 cache size (e.g., 32 MB)
- **TDP (Thermal Design Power)** - Power consumption (e.g., 65W)
- **Socket** - CPU socket type (e.g., AM4, LGA1200, LGA1700)
- **Process Technology** - Manufacturing process (e.g., TSMC 7nm FinFET)
- **Overclocking** - Whether unlocked for overclocking (Yes/No)
- **Supported Memory** - Memory type and speed (e.g., DDR4 up to 3200 MT/s)
- **OS Support** - Operating system compatibility (e.g., Windows 11/10, Linux 64-bit)
- **Cooler Included** - Whether stock cooler is included (Yes/No, model if applicable)

### Optional Specifications:
- **Architecture** - CPU architecture (e.g., Zen 3, Alder Lake)
- **PCIe Version** - PCIe support version
- **Integrated Graphics** - Whether it has integrated graphics (Yes/No, model if applicable)
- **Warranty** - Warranty period

---

## GPU (Graphics Card) Specifications

Based on example: **NVIDIA RTX 3060 12GB**

### Required Specifications:
- **VRAM** - Video memory size (e.g., 12GB)
- **Memory Type** - Memory technology (e.g., GDDR6, GDDR6X)
- **Memory Bus Width** - Memory bus width in bits (e.g., 192-bit)
- **Base Clock** - Base GPU clock speed (e.g., 1320 MHz)
- **Boost Clock** - Boost GPU clock speed (e.g., 1777 MHz)
- **CUDA Cores / Stream Processors** - Number of cores (e.g., 3584 CUDA Cores)
- **RT Cores** - Ray tracing cores (for RTX cards)
- **Tensor Cores** - AI/ML cores (for RTX cards)
- **Power Consumption** - TDP in watts (e.g., 170W)
- **Recommended PSU** - Minimum recommended power supply (e.g., 550W)
- **PCIe Interface** - PCIe version and slot type (e.g., PCIe 4.0 x16)
- **Display Outputs** - Available ports (e.g., 3x DisplayPort 1.4a, 1x HDMI 2.1)
- **Resolution Support** - Supported resolutions (e.g., 1080p, 1440p, 4K)
- **Ray Tracing** - Ray tracing support (Yes/No)
- **DLSS/FSR Support** - Upscaling technology support

### Optional Specifications:
- **Length** - Card length in mm
- **Height** - Card height in mm
- **Slot Width** - Number of PCIe slots occupied (e.g., 2 slots)
- **Cooling Solution** - Cooling type (e.g., Dual Fan, Triple Fan, AIO)
- **RGB Lighting** - RGB lighting support (Yes/No)
- **Warranty** - Warranty period

---

## Motherboard Specifications

Based on example: **MSI B450 Tomahawk**

### Required Specifications:
- **Form Factor** - Board size (e.g., ATX, mATX, ITX)
- **Socket** - CPU socket type (e.g., AM4, LGA1200)
- **Chipset** - Chipset model (e.g., B450, Z690, X570)
- **Memory Slots** - Number of RAM slots (e.g., 4 slots)
- **Memory Type** - Supported RAM type (e.g., DDR4)
- **Max Memory** - Maximum supported RAM (e.g., 128GB)
- **Memory Speed** - Supported memory speeds (e.g., DDR4 2133-3600 MHz)
- **PCIe Slots** - PCIe slot configuration (e.g., 1x PCIe 3.0 x16, 2x PCIe 3.0 x1)
- **M.2 Slots** - Number and type of M.2 slots (e.g., 2x M.2 PCIe 3.0 x4)
- **SATA Ports** - Number of SATA ports (e.g., 6x SATA 6Gb/s)
- **USB Ports** - USB port configuration (e.g., 2x USB 3.2 Gen 2, 4x USB 3.2 Gen 1)
- **Audio** - Audio codec and features (e.g., Realtek ALC892, 7.1 Channel)
- **LAN** - Ethernet controller (e.g., Realtek RTL8111H Gigabit LAN)
- **WiFi** - WiFi support (Yes/No, standard if applicable)
- **Bluetooth** - Bluetooth support (Yes/No, version if applicable)
- **Power Connectors** - Power connector types (e.g., 24-pin ATX, 8-pin CPU)

### Optional Specifications:
- **RGB Headers** - Number of RGB headers
- **Fan Headers** - Number of fan headers
- **BIOS Features** - BIOS features (e.g., UEFI, Q-Flash)
- **Overclocking Support** - Overclocking capabilities
- **Warranty** - Warranty period

---

## RAM (Memory) Specifications

Based on example: **Corsair Vengeance 16GB (2x8GB) DDR4**

### Required Specifications:
- **Capacity** - Total memory capacity (e.g., 16GB)
- **Kit Configuration** - Kit type (e.g., 2x8GB, 4x8GB, 2x16GB)
- **Memory Type** - RAM type (e.g., DDR4, DDR5)
- **Speed** - Memory speed/frequency (e.g., 3000MHz, 3600MHz)
- **CAS Latency (CL)** - CAS latency timings (e.g., CL16, CL18)
- **Voltage** - Operating voltage (e.g., 1.35V)
- **Form Factor** - Physical form factor (e.g., DIMM, SODIMM)
- **Compatibility** - Compatible platforms (e.g., Intel/AMD)
- **Heat Spreader** - Whether it has heat spreader (Yes/No)
- **RGB Lighting** - RGB lighting support (Yes/No)

### Optional Specifications:
- **Timings** - Full timing specifications (e.g., 16-18-18-36)
- **XMP/EXPO Support** - XMP/EXPO profile support (Yes/No, version)
- **Height** - Module height in mm
- **Warranty** - Warranty period

---

## PSU (Power Supply) Specifications

Based on example: **EVGA 650W Bronze**

### Required Specifications:
- **Wattage** - Power output in watts (e.g., 650W)
- **Efficiency Rating** - 80 Plus rating (e.g., Bronze, Gold, Platinum, Titanium)
- **Modularity** - Cable type (e.g., Non-modular, Semi-modular, Fully Modular)
- **Form Factor** - PSU form factor (e.g., ATX, SFX)
- **12V Rail** - 12V rail capacity (e.g., +12V@54A = 648W)
- **Connectors** - Available connectors:
  - **CPU Power** - CPU power connectors (e.g., 1x 4+4 pin)
  - **PCIe Power** - PCIe power connectors (e.g., 2x 6+2 pin)
  - **SATA Power** - SATA power connectors (e.g., 6x SATA)
  - **Molex** - Molex connectors (e.g., 3x Molex)
- **Fan** - Fan size and type (e.g., 120mm Fluid Dynamic Bearing)
- **Protection Features** - Safety features (e.g., OVP, UVP, OCP, SCP, OTP)
- **Warranty** - Warranty period (e.g., 3 years, 5 years, 10 years)

### Optional Specifications:
- **Dimensions** - Physical dimensions (L x W x H in mm)
- **Noise Level** - Noise level in dBA
- **Operating Temperature** - Operating temperature range
- **MTBF** - Mean Time Between Failures

---

## Storage (SSD/HDD) Specifications

Based on example: **Samsung 980 1TB NVMe SSD**

### Required Specifications:
- **Capacity** - Storage capacity (e.g., 1TB, 2TB)
- **Type** - Storage type (e.g., NVMe SSD, SATA SSD, HDD)
- **Form Factor** - Physical form factor (e.g., M.2 2280, 2.5", 3.5")
- **Interface** - Connection interface (e.g., PCIe 3.0 x4, PCIe 4.0 x4, SATA 6Gb/s)
- **NAND Type** - NAND flash type (e.g., TLC, QLC, 3D NAND)
- **Controller** - Controller model (e.g., Samsung Phoenix)
- **Sequential Read** - Maximum sequential read speed (e.g., 3500 MB/s)
- **Sequential Write** - Maximum sequential write speed (e.g., 3000 MB/s)
- **Random Read IOPS** - Random read IOPS (e.g., 500K IOPS)
- **Random Write IOPS** - Random write IOPS (e.g., 480K IOPS)
- **Endurance (TBW)** - Total Bytes Written endurance (e.g., 600 TBW)
- **MTBF** - Mean Time Between Failures (e.g., 1,500,000 hours)
- **Warranty** - Warranty period (e.g., 5 years)

### Optional Specifications:
- **DRAM Cache** - DRAM cache size (Yes/No, size if applicable)
- **Encryption** - Hardware encryption support (Yes/No)
- **TRIM Support** - TRIM support (Yes/No)
- **Operating Temperature** - Operating temperature range
- **Dimensions** - Physical dimensions (L x W x H in mm)
- **Weight** - Weight in grams

---

## Case Specifications

### Required Specifications:
- **Form Factor Support** - Supported motherboard sizes (e.g., ATX, mATX, ITX)
- **Dimensions** - Case dimensions (L x W x H in mm)
- **Max GPU Length** - Maximum graphics card length (e.g., 330mm)
- **Max CPU Cooler Height** - Maximum CPU cooler height (e.g., 160mm)
- **Drive Bays** - Drive bay configuration:
  - **3.5" Bays** - Number of 3.5" drive bays
  - **2.5" Bays** - Number of 2.5" drive bays
- **Expansion Slots** - Number of expansion slots (e.g., 7 slots)
- **Front I/O** - Front panel I/O ports (e.g., 2x USB 3.0, 1x USB-C, Audio)
- **Pre-installed Fans** - Included fans (e.g., 2x 120mm front fans)
- **Fan Support** - Fan mounting options (e.g., 3x 120mm front, 2x 140mm top)
- **Radiator Support** - AIO/radiator support (e.g., 360mm front, 240mm top)
- **PSU Support** - PSU form factor (e.g., ATX, SFX)
- **Side Panel** - Side panel type (e.g., Tempered Glass, Acrylic, Solid)
- **Cable Management** - Cable management features (Yes/No, details)

### Optional Specifications:
- **RGB Lighting** - RGB lighting support (Yes/No)
- **Dust Filters** - Dust filter locations
- **Weight** - Weight in kg
- **Material** - Case material (e.g., Steel, Aluminum, Plastic)
- **Warranty** - Warranty period

---

## CPU Cooler Specifications

### Required Specifications:
- **Type** - Cooler type (e.g., Air Cooler, AIO Liquid Cooler)
- **Compatibility** - Socket compatibility (e.g., AM4, LGA1200, LGA1700)
- **Dimensions** - Cooler dimensions (L x W x H in mm)
- **Fan Size** - Fan size (e.g., 120mm, 140mm)
- **Fan Speed** - Fan speed range (e.g., 600-1800 RPM)
- **Noise Level** - Noise level in dBA (e.g., 25-35 dBA)
- **TDP** - Maximum TDP supported (e.g., 200W)
- **RGB Lighting** - RGB lighting support (Yes/No)

### Optional Specifications (AIO Coolers):
- **Radiator Size** - Radiator size (e.g., 240mm, 360mm)
- **Pump Speed** - Pump speed (e.g., 2000-2800 RPM)
- **Tube Length** - Tube length in mm
- **Warranty** - Warranty period

---

## Implementation Notes

1. **Specifications should be stored in a structured format** (JSON object or database fields)
2. **Category-specific specifications** should be displayed based on product category
3. **Optional specifications** can be shown if available, hidden if not
4. **Specifications should be displayed in a readable format** (key-value pairs, tables, or structured lists)
5. **Consider adding search/filter functionality** for specifications in the future

## Example Data Structure

```json
{
  "id": "cpu-ryzen5",
  "title": "AMD Ryzen 5 5600X",
  "category": "CPU",
  "price": 12995,
  "specifications": {
    "cores": "6 Cores",
    "threads": "12 Threads",
    "baseClock": "3.7 GHz",
    "maxBoostClock": "up to 4.6 GHz",
    "l2Cache": "3 MB",
    "l3Cache": "32 MB",
    "tdp": "65W",
    "socket": "AM4",
    "processTechnology": "TSMC 7nm FinFET",
    "overclocking": "Unlocked",
    "supportedMemory": "DDR4 up to 3200 MT/s",
    "osSupport": "Windows 11 / Windows 10 / Linux (64-bit)",
    "coolerIncluded": "Yes (AMD Wraith Stealth)"
  }
}
```

