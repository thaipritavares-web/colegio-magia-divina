import os
import glob

def fix_bom_and_encoding(file_path):
    """Remove BOM and fix UTF-8 encoding - AGGRESSIVE"""
    try:
        # Read file as bytes
        with open(file_path, 'rb') as f:
            content = f.read()
        
        # Remove BOM if present
        if content.startswith(b'\xef\xbb\xbf'):
            content = content[3:]
            print(f"REMOVED BOM from {os.path.basename(file_path)}")
        
        # Write back as UTF-8 without BOM
        with open(file_path, 'wb') as f:
            f.write(content)
        
        return True, "Fixed"
    except Exception as e:
        return False, str(e)

# Find all .tsx and .ts files
root_dir = r"C:\Users\thais\Documents\Projeto_website_colegio-tradicao-magia-divina"
patterns = ['**/*.tsx', '**/*.ts']

fixed_files = []
failed_files = []

for pattern in patterns:
    files = glob.glob(os.path.join(root_dir, pattern), recursive=True)
    for file_path in files:
        # Skip node_modules
        if 'node_modules' in file_path or '.next' in file_path:
            continue
        
        success, message = fix_bom_and_encoding(file_path)
        if success:
            fixed_files.append(file_path)
        else:
            failed_files.append((file_path, message))
            print(f"ERRO {os.path.basename(file_path)}: {message}")

print(f"\nRESUMO:")
print(f"Arquivos processados: {len(fixed_files)}")
print(f"Arquivos com erro: {len(failed_files)}")
