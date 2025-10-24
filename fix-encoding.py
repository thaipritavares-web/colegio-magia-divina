import os
import glob

def fix_bom_and_encoding(file_path):
    """Remove BOM and fix UTF-8 encoding"""
    try:
        # Read file with UTF-8-sig (handles BOM automatically)
        with open(file_path, 'r', encoding='utf-8-sig') as f:
            content = f.read()
        
        # Write back without BOM (using utf-8)
        with open(file_path, 'w', encoding='utf-8', newline='\n') as f:
            f.write(content)
        
        return True, "Fixed"
    except Exception as e:
        return False, str(e)

# Find all .tsx and .ts files
root_dir = r"C:\Users\thais\Documents\Projeto_website_colegio-tradicao-magia-divina"
patterns = ['**/*.tsx', '**/*.ts', '**/*.css']

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
            print(f"OK {os.path.basename(file_path)}")
        else:
            failed_files.append((file_path, message))
            print(f"ERRO {os.path.basename(file_path)}: {message}")

print(f"\nRESUMO:")
print(f"Arquivos corrigidos: {len(fixed_files)}")
print(f"Arquivos com erro: {len(failed_files)}")
